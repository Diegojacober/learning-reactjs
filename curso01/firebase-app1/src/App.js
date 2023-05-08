import { useEffect, useState } from 'react';
import { db } from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore';
import './app.css'

function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [posts, setPosts] = useState([])

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

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h1>{author}</h1>

      <div className='container'>
        <label>Title:</label>
        <textarea type='text' placeholder='Digite o título' value={title} onChange={(e) => { setTitle(e.target.value) }} />

        <label>Author: </label>
        <input type='text' placeholder='Autor' value={author} onChange={(e) => { setAuthor(e.target.value) }} />


        <button onClick={handleAdd}>Adiconar</button>
        <button onClick={searchPost}>Buscar post</button>

        <div className='posts'>

          {posts.map((post) => {
            return (
              <p key={post.id}>{post.title} --- <small>{post.author}</small></p>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
