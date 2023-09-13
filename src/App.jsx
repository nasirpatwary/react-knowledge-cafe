import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handleBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
  
  <Header></Header>
  <div className='md:flex max-w-4xl mx-auto'>
  <Blogs handleBookmark={ handleBookmark} ></Blogs>
  <Bookmarks bookmarks={bookmarks}></Bookmarks>
  </div>
     
    </>
  )
}

export default App
