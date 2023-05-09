import { useEffect, useState } from 'react';
import { auth, db } from './firebaseConnection'
import { doc,
   setDoc,
    collection, 
    addDoc,
     getDoc,
      getDocs,
       updateDoc, 
       deleteDoc, 
       onSnapshot} from 'firebase/firestore';

import { createUserWithEmailAndPassword } from 'firebase/auth'
import './app.css'

function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [posts, setPosts] = useState([])
  const [idPost, setIdPost] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

 
  

  async function handleAdd() {

    // await setDoc(doc(db, 'posts', "12345"), {
    //   title: title,
    //   author: author,
    // })
    // .then(() => {
    //     console.log('foi')
    // })
    // .catch((e) => {
    //   console.log('erro: ' + e)
    // })

    await addDoc(collection(db, "posts"), {
      title: title,
      author: author,
    })
      .then((e) => {
        setTitle('')
        setAuthor('')
        console.log('foi')

      })
      .catch((e) => {
        console.log('erro: ' + e)
      })

  }

  async function searchPost() {
    const postRef = doc(db, "posts", "ETFYlFjDp4ENKgyYAb0k")

    await getDoc(postRef)
      .then((snapshot) => {
        setAuthor(snapshot.data().author)
        setTitle(snapshot.data().title)
      })
      .catch((error) => {
        alert(error)
      })
  }

  async function getAllPosts() {
    const collectionRef = collection(db, "posts")

    await getDocs(collectionRef)
      .then((snapshot) => {
        let lista = []
        snapshot.forEach((post) => {
          lista.push({
            id: post.id,
            title: post.data().title,
            author: post.data().author,
          })
        })

        setPosts(lista)
      })
      .catch((error) => {
        alert(error)
      })
  }

  async function editPost() {
    if (idPost == '' || title == '' || author == '') {
        alert("preencha os campos")
    } else {
      const docRef = doc(db, "posts", idPost.trim())
      await updateDoc(docRef, {
          title: title,
          author: author
      }).then(() => {
        alert('atualizado com sucesso')
        setIdPost('')
        setTitle('')
        setAuthor('')
      })
    }
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id)

    await deleteDoc(docRef)
    .then(() => {
      alert("Post deletado com sucesso")
    })
    .catch((erro) => {
      console.log(erro)
    })
  }

  async function newUser() {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('usuário cadastrado com sucesso!!');
      setEmail('')
      setPass('')
    })
    .catch((e) => {
      console.log(e)
      if(e.code == 'auth/weak-password') {
        alert('senha muito fraca')
      } else if (e.code == 'auth/email-already-in-use') {
        alert("Email já cadastrado")
      }
    })
  }

  useEffect(() => {
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            author: doc.data().author,
            title: doc.data().title,
          })
        })
  
        setPosts(listaPost);
      })
    }

    loadPosts();

  }, [])

  
  return (
    <div>
      <h2>Usuários</h2>

      <div className='container'>
        <label>Email:</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value) }/>

        <label>Senha:</label>
        <input type='password' value={password} onChange={(e) => setPass(e.target.value) }/>


        <button onClick={newUser}>Cadastrar</button>
      </div>
      
      <br/><br/>
      <h2>Posts</h2>
      <h3>{title}</h3>
      <h3>{author}</h3>

      <div className='container'>

        <label>Id do Post:</label>
        <textarea type='text' placeholder='Digite o id do post'  onChange={(e) => { setIdPost(e.target.value) }} />

        <label>Title:</label>
        <textarea type='text' placeholder='Digite o título' value={title} onChange={(e) => { setTitle(e.target.value) }} />

        <label>Author: </label>
        <input type='text' placeholder='Autor' value={author} onChange={(e) => { setAuthor(e.target.value) }} />


        <button onClick={handleAdd}>Adiconar</button>
        <button onClick={searchPost}>Buscar post</button>
        <hr/>
        <button onClick={editPost}>Editar post</button>

        <div className='posts'>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <small><strong>{post.id}</strong></small><
                  br/>
                <span>{post.title}</span> -- <span>{post.author}</span>
                <button onClick={() => excluirPost(post.id)}>Excluir</button><br/> <br/>
              </li>
             
            )
          })}
        </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
