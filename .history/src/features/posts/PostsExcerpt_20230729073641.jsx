
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactButton from './ReactButton'


const PostsExcerpt = ({post}) => {
  return (
    <article className='list-group' >
            <div className='list-group-item mb-3'>

            <h3 className="d-flex justify-content-center">{post.title}</h3>
            <p className="d-flex justify-content-center">{post.body.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactButton post={post} />
            </div>
        </article>
  )
}

export default PostsExcerpt
