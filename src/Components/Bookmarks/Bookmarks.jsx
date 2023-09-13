import PropTypes from 'prop-types'; 
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className='md:w-1/3 bg-gray-300 mt-2 pt-2'>
           <h3 className='text-3xl text-center'>Bookmaked Blogs:{bookmarks.length} </h3>
             {
                 bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
             }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}
export default Bookmarks;