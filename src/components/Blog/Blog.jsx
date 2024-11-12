import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({ book, handleBookmark, handleReadingTime }) => {
    const { id, title, cover, author, authorImg, postedDate, readingTime, hashtags } = book;

    return (
        <div>
            <img className='lg:w-full rounded-t-md lg:h-[400px]' src={cover} alt={title} />
            <div className='flex justify-between items-center gap-4 my-4'>
                <div className='flex gap-4 items-center'>
                    <img className='h-16 w-16 rounded-full' src={authorImg} alt={author} />
                    <div >
                        <h4 className='font-bold text-xl'>{author}</h4>
                        <h4 className='text-gray-500'>{postedDate}</h4>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-gray-500'>{readingTime} min read </p>
                    <button onClick={() => handleBookmark(book)} className='btn'><FaRegBookmark /></button>
                </div>
            </div>
            <h3 className='text-xl md:text-3xl font-bold'>{title}</h3>
            <div className='my-3'>
                {
                    hashtags?.map((hastag, index) => <span className='text-gray-500' key={index}>{hastag} </span>)
                }
            </div>
            <button onClick={() => handleReadingTime(id, readingTime)} className='btn mb-4 text-purple-800 underline'>Mark as read</button>
            <hr className='border mb-6' />
        </div>
    );
};

export default Blog;