import { useState } from 'react';
import AddPost from './Components/AddPost';
import Login from './Components/Login';
import PostList from './Components/PostList';
import { Profile } from './Components/Profile';
import './style.sass';

// Hier kan later localstorage of andere data in staan van de posts die al zijn geplaatst
const initialPosts: Post[] = [
  {
    content: 'Welcome to Whisper! A social media platform designed to be a safe place with no shouting.',
    user: 'Whisper Admin'
  }
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  
  const addPost: AddPost = (content: string) => {
    if (content !== '') { 
      const newPost = {content}
      setPosts([...posts, newPost])
    } else {
      alert('Your whisper is inaudible')
      return 
    }
   
  }

  return (
    <div>
      <Login username={''} isLoggedIn={false}/>
      <div className="App">
        <h1>Whisper</h1>      
        <Profile />
        <AddPost addPost ={addPost}/>
        <PostList posts={posts}/>
      </div>
     
    </div>
  );
}

export default App;
