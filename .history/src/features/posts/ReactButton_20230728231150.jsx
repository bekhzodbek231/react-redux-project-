import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";



const reactionEmoji = {
    
    liked: '👍',
    disliked: '👎',
    comments: ' 🔁'
             
}


const ReactButton = ({post}) => {
    const dispatch = useDispatch();

  return (
    <div>
      
    </div>
  )
}

export default ReactButton
