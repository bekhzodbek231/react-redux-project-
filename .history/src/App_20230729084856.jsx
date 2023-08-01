import './App.css'
import AddPostForm from './features/AddPostForm';
import PostsList from "../src/features/posts/PostsList"
import SinglePostPage from './features/posts/SinglePostPage';
import Layouts from './components/Layouts';
import { Routes , Route} from 'react-router-dom';



function App(){

  return (
   <div className='App' >
    <AddPostForm />
    <PostsList />
   </div>
        
  )
}

export default App;
