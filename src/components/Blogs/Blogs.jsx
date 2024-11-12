import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [setBooks]);

    return (
        <div className='md:w-2/3'>
            {
                books?.map(book => <Blog key={book.id} book={book} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />)
        }
        </div>
    );
};

export default Blogs;