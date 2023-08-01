import './App.css'
import AddPostForm from './features/AddPostForm';
import PostsList from "../src/features/posts/PostsList"
import SinglePostPage from './features/posts/SinglePostPage';
import Layouts from './components/Layouts';
import { Routes, Route} from 'react-router-dom';



function App(){

  return (
   <Routes>
    <Route path='/' element={<Layouts />}>

      <Route index element={<PostsList />}/>

      <Route path='post'>
         <Route index element={<AddPostForm />} />
         <Route path=":postId" element={<SinglePostPage />} /> 
      </Route>
      
    </Route>
   </Routes>
        
  )
}

export default App;
