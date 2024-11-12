import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readTime }) => {
    // const totalReadingTime = bookmarks?.reduce((sum, reading) => sum + reading.readingTime, 0);

    return (
        <div className='md:w-1/3'>
            <h3 className='text-xl font-bold bg-purple-300 p-3 rounded  text-center'>Total Bookmarks {bookmarks?.length}</h3>
            <h3 className='text-xl font-bold bg-orange-300 p-3 mt-2 rounded  text-center'>Reading Time {readTime}</h3>
            <div className='bg-slate-100'>
                {
                    bookmarks?.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark} />)
                }
            </div>
        </div>
    );
};

export default Bookmarks;