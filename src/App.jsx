import React, { useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import img from './assets/images/profile.png'
import Bookmarks from './components/Bookmarks/Bookmarks';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (book) => {
    const newBookmark = [...bookmarks, book];
    setBookmarks(newBookmark);
  }

  const handleReadingTime = (id, time) => {
    // console.log(time)
    const newTime = readTime + time;
    setReadTime(newTime);
    const remainingBookMarks = bookmarks?.filter(bookmark => bookmark.id != id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center pt-4 border-b-2'>
        <h2 className='text-3xl font-bold text-purple-600'>Knowledge Cafe</h2>
        <img src={img} alt="profile" />
      </div>
      <div className='md:flex gap-8 my-6'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
    </div>
  );
};

export default App;