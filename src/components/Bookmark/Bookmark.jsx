import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h4 className='text-gray-700 bg-yellow-300 p-2 font-bold my-2'>{bookmark?.title}</h4>
        </div>
    );
};

export default Bookmark;