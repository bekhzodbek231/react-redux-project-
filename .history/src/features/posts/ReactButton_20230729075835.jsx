import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";



const reactionEmoji = {
    
    liked: '👍',
    disliked: '👎',
    comments: '🔁'
             
}


const ReactButton = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
       return (
        <button className="btn btn-secondary"
            key={name}
            type="button"
            onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
                
        >{emoji} {post.reactions[name]}</button>
       ) 
    })

  return <div >{reactionButtons}</div>
   
}


export default ReactButton
