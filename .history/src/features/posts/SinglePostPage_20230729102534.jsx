import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactButton from './ReactButton'

import { useParams } from 'react-router-dom'


const SinglePostPage = () => {

    const {postId} = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if(!post){
        return <section>
            <h2>Post not found!</h2>
        </section>
    }

  return (
    <article className='list-group' >
            <div className='list-group-item mb-3'>

            <h2 className="d-flex justify-content-center">{post.title}</h2>
            <p className="d-flex justify-content-center">{post.body}</p>
            <p>
                <Link>Edit Post</Link>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactButton post={post} />
            </div>
        </article>
  )
}

export default SinglePostPage
