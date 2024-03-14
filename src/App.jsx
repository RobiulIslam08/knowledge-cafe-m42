
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [countTime, setCountTime] = useState(0)
  function handleAddToBookmark(blog){
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  function handleTime(id,time){
    console.log('time a click korla', time)
    const newTime = countTime + time;
    setCountTime(newTime)
    // remove selct  bookmark 
    console.log('clic to remove',id)
    const remainigBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainigBookMark)
  }


  return (
    <>
     <Header></Header>
     <main className='md:flex justify-between p-6 md:max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleTime={handleTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} countTime={countTime}></Bookmarks>
     </main>
    </>
  )
}

export default App
