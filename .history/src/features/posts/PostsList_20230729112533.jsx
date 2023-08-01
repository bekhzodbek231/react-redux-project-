import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { selectAllPosts, getPostError,getPostStatus } from './postsSlice'
import PostsExcerpt from './PostsExcerpt'


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
        content = <p>"Loading..."</p>;
    }else if(postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    }else if(postsStatus === 'failed'){
        content = <p>{error}</p>
    }

    
  return (
    <div className='my-5 mx-5'>
        <section className='form-group'>
            <h2 className="form-control">Posts</h2>
            {content}
        </section>
      
    </div>
  )
}

export default PostsList
