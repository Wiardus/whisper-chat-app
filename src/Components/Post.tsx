import { user} from "./Login"
import { useState } from 'react';

interface Props {
    post: Post
    comment?: Post
}


const Post = ({post}: Props) => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([] as any)

    const addComment = (comment: string) => {
        setComments([...comments, comment])
    }
    
    return (
        <div className="postContainer">
            <p id="post">{post.content}</p>
            <p className="byUser" >Posted by: {post.user} {user.username}</p>
            <form className="comment"> 
                <p className="commentAmount">{comments.length}</p>
                <input value={comment} type="text" placeholder="wat vind je hiervan..." onChange={e => {setComment(e.target.value)}} />
                <button type="submit" onClick={e => {e.preventDefault(); addComment(comment); setComment('');}}>Reageer</button>
            </form>
            <hr></hr>
            <ul>
            {comments.map((comment: string) =>(
                <li key={comment}>{comment} <label className="byUser">by {user.username}</label></li>
            ))} </ul>
        </div>      
    )
}

export default Post

