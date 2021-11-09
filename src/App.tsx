import React, { useState } from 'react';
import AddPost from './Components/AddPost';
import PostList from './Components/PostList';
import { Profile } from './Components/Profile';
import './style.sass';

// Hier kan later localstorage of andere data in staan van de posts die al zijn geplaatst
const initialPosts: Post[] = [
  {
    content: 'Welcome to Whisper!'
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
    <div className="App">
      <h1>Whisper</h1>
      <Profile />
      <AddPost addPost ={addPost}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
