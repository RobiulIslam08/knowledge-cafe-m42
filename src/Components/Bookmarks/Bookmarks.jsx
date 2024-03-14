import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,countTime}) => {

    
    return (
        <div  className='1/3 bg-slate-400 p-3 rounded-lg'>
            <h1 className="text-4xl">Bookmarks length: {bookmarks.length}</h1>
            <p>countTime: {countTime}</p>

            {
                bookmarks.map((bookmark, idx) => <Bookmark  bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;