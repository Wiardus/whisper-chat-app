

interface Props {
    post: Post
}

const Post = ({post}: Props) => {
    return (
        <div className="postContainer">
            <p id="post">{post.content}</p>
        
        </div>
        
    )
}

export default Post