import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (

      
        <div className='bg-slate-200 m-6 p-6 rounded-lg'>
            <h1>{title}</h1>
        </div>
    );
};

export default Bookmark;