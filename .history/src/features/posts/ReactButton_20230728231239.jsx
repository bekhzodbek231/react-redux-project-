import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";



const reactionEmoji = {
    
    liked: '👍',
    disliked: '👎',
    comments: '🔁'
             
}


const ReactButton = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji)

  return (
    <div>
      
    </div>
  )
}

export default ReactButton
