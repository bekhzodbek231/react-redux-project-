import './App.css'
import AddPostForm from './features/AddPostForm';
import PostsList from "../src/features/posts/PostsList"




function App(){

  return (
   <div className='App' >
    <AddPostForm />
    <PostsList />
   </div>
        
  )
}

export default App;
