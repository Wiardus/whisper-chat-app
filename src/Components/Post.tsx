import { user} from "./Login"


interface Props {
    post: Post
}

const Post = ({post}: Props) => {
    return (
        <div className="postContainer">
            <p id="post">{post.content}</p>
            <p id="byUser">Posted by: {post.user} {user.username}</p>
            <div className="comment"></div>
        </div>
        
    )
}

export default Post