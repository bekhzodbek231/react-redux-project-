import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./app/store.js"
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice.js';
import { fetchPosts } from './features/posts/postsSlice.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
