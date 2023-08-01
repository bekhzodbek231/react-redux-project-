import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectAllUsers } from './users/usersSlice'
import { addNewPost } from './posts/postsSlice'

const AddPostForm = () => {
     
    const dispatch = useDispatch()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus]= useState('idle')

    const users = useSelector(selectAllUsers);

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAutherChange = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded(title, content,userId)
            )
            setTitle('')
            setContent('')
        }
    }
  
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const useroptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
        ))


  return (
    <div className=' my-5 mx-5'>
      <section>
        <h2>Add a New Post</h2>
        <form>
            <div className='form-group'>

            <label htmlFor="postTitle">Post Title:</label>
            <input className="form-control"
                   type="text" 
                   name="postTitle"
                   value={title}
                   onChange={onTitleChange} />
            
            </div >
            <div className='my-2'>
                <label htmlFor="postAuther">Auther:</label>
                <select className='form-select ' value={userId} onChange={onAutherChange}>
                    <option value=""></option>
                     {useroptions}

                </select>
            </div>
            <div className='form-group mb-2'>
            <label htmlFor="postContent">Content:</label>
            <textarea className="form-control"
                      name="postContent"
                      value={content}
                      onChange={onContentChange}  />
            </div>

            
            <button disabled={!canSave}
                    onClick={onSavePostClicked} 
                    type="button" 
                    className='btn btn-secondary my-4'>Save Post</button>
        </form>
      </section>
    </div>
  )
}

export default AddPostForm
