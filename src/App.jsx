import { useState } from 'react'
import { useRoutes} from 'react-router-dom'
import ReadPost from './pages/ReadPost.jsx'
import CreatePost from './pages/CreatePost.jsx'
import EditPost from './pages/EditPost.jsx'
import { Link } from 'react-router-dom'
import './App.css'
import {supabase} from './Client.js';

function App() {
  const [count, setCount] = useState(0)
  const posts = [];
  // Set up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPost data={posts} />
    },
    {
      path: "edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path: "/new",
      element: <CreatePost />
    }
  ]);
  return (
    <div className="App">
      <div className='header'>
        <title>Music Minds</title>
        <nav class="topnav">
          <Link class="active" to="/">Home</Link>
          <Link to="/new">Create New Post</Link>
        </nav>
        <Link to="/"><button className="headerBtn" style={{backgroundColor: "#93C572"}}> View Songs  </button></Link>
      </div>
      {element}
    </div>
    
  )
}

export default App
