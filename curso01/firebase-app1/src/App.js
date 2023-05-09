import { useEffect, useState } from 'react';
import { db } from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import './app.css'

function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [posts, setPosts] = useState([])
  const [idPost, setIdPost] = useState('')

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

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h1>{author}</h1>

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
