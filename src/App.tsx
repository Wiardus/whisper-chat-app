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
    user: 'Whisper Admin',
  }
]

const initialComments: PostComment[] = [
  {
    text: 'hoi'
  }
]

function App() {
  const [posts, setPosts] = useState(initialPosts)
  //const [comments, setComments] = useState(initialComments)
  
  const addPost: AddPost = (content: string) => {
    if (content !== '') { 
      const newPost = {content}
      setPosts([...posts, newPost])
    } else {
      alert('Your whisper is inaudible')
      return 
    }
   
  }
 
  /* const addComment: AddComment = (comment: string) => {
    const newComment = {comment}
    //setComments([...comments, newComment])

    //comments.push(comment)
    //console.log(comments)
    //return ( <ol>{comments.map((comment) => <li>{comment}</li>)  } </ol> )
} */  

  return (
    <div>
      <Login username={''} isLoggedIn={false}/>
      <div className="App">
        <h1>Whisper</h1>      
        <Profile />
        <AddPost addPost = {addPost}/>
        <PostList posts={posts} />
    
      </div>
     
    </div>
  );
}

export default App;
