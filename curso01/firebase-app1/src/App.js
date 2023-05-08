import { useState } from 'react';
import { db } from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore';
import './app.css'

function App() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')


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
    const postRef = doc(db, "posts", "1234")

    await getDoc(postRef)
    .then((snapshot) => {
      setAuthor(snapshot.data().author)
      setTitle(snapshot.data().title)
    })
    .catch((error) => {
      alert(error)
    })
  }

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
      </div>

    </div>
  );
}

export default App;
