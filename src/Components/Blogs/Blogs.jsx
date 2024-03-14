import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmark,handleTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  
    return (
        <div className='w-2/3 '>
            <h1>Blogs</h1>
            
            {
                blogs.map(blog => <Blog handleAddToBookmark={handleAddToBookmark} handleTime={handleTime} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blogs;