import React from 'react'
import { useSelector } from "react-redux"
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderPosts = orderedPosts.map((post) => (
        <article className='list-group' key={post.id}>
            <div className='list-group-item mb-3'>

            <h3 className="d-flex justify-content-center">{post.title}</h3>
            <p className="d-flex justify-content-center">{post.content.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
            </p>
            </div>
        </article>
    ))
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
