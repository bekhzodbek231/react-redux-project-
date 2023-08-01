import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { selectAllPosts, getPostError,getPostStatus, fetchPosts } from './postsSlice'


const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostStatus);
    const error = useSelector(getPostError);

    useEffect(() =>{
        if(postsStatus === 'idle'){
            dispatch(fetchPosts())
        }
    },[postsStatus, dispatch])

    let content;
    if(postsStatus === 'loading'){
        content = <p>"Loading..."</p>
    }

    
  return (
    <div className='my-5 mx-5'>
        <section className='form-group'>
            <h2 className="form-control">Posts</h2>
            {renderPosts}
        </section>
      
    </div>
  )
}

export default PostsList
