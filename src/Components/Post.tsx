import { user} from "./Login"
import { useState } from 'react';

interface Props {
    post: Post
    comments?: PostComment
}


const Post = ({post, comments}: Props) => {
    const [comment, setComment] = useState('')

    const addComment = (comment: string) => {
        alert(comment)
    }
    
    return (
        <div className="postContainer">
            <p id="post">{post.content}</p>
            <p id="byUser">Posted by: {post.user} {user.username}</p>
            <form className="comment">
                <input value={comment} type="text" placeholder="wat vind je hiervan..." onChange={e => {setComment(e.target.value)}} />
                <button type="submit" onClick={e => {e.preventDefault(); addComment(comment); setComment('');}}>Reageer</button>
            </form>
            <p>{comment}</p> 

        </div>
        
    )
}

export default Post

