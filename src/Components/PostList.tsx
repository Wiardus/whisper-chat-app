import Post from './Post'

interface Props {
    posts: Post[]
}


const PostList = ({posts}: Props) => {
    return (
        <div className="postList">
            {posts.map(post =>(
                <Post key={post.content} post={post}  />
            ))}         
        </div>      
    )
}

export default PostList