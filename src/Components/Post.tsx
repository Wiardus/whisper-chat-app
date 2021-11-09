interface Props {
    post: Post
}

const Post = ({post}: Props) => {
    return (
        <p>{post.content}</p>
    )
}

export default Post