interface Props {
    comments: PostComment[]
}


const CommentList = ({comments}: Props) => {
    return (
        <div className="commentList">
              {comments.map((comment) =>(
                <li>{comment}</li> 
            ))}
        </div>
    )
}
        
export default CommentList