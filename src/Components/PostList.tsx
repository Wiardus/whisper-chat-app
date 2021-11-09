import Post from './Post'

interface Props {
    posts: Post[]
}




const PostList = ({posts}: Props) => {
    return (
        <div>
            {posts.map(post =>(
                <Post key={post.content} post={post}/>
            ))}
            
        </div>
        
    )
}

export default PostList