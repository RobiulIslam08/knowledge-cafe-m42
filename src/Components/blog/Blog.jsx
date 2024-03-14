
import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types'

const Blog = ({blog, handleAddToBookmark,handleTime}) => {
    const {title, hashtags,reading_time,posted_date,author_img, author,cover, id} = blog
    return (
        <div className='mb-32'>
             <h1 className='text-5xl mb-4'>{title}</h1>
           <img src={cover} alt="" className='mb-8 h-[450px] w-full' />
           {/* profile section */}
           <div className='mb-6 flex justify-between'>
            
                <div className='flex gap-4 items-center'>
                
                    <img className='h-[60px] w-[60px] rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='font-semibold'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <p>{reading_time}</p>
                    <div className="flex items-center justify-center gap-1">
                    <p className="">bookmark</p>
                    <FaBookmark onClick={()=>handleAddToBookmark(blog)} ></FaBookmark>

                    </div>

                </div>
           </div>
          
           <p className='mb-7'>
            {
                hashtags.map((hastage, idx) => <a key={idx}><span > #{hastage}</span></a>)
            }
           </p>
           <button className="text-purple-800 underline" onClick={()=>handleTime(id,reading_time)}>mark as read</button>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;