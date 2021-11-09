import React, { useState } from 'react';
import AddPost from './Components/AddPost';
import PostList from './Components/PostList';
import './style.sass';

// Hier kan later localstorage of andere data in staan van de posts die al zijn geplaatst
const initialPosts: Post[] = [
  {
    content: 'eerste post'
  }
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  
  const addPost: AddPost = (content: string) => {
    const newPost = {content} 
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <h1>Whisper</h1>
      <AddPost addPost ={addPost}/>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
