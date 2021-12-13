import { useState } from 'react';

interface Props {
    addComment: AddComment
}

const AddComment = ({addComment}: Props) => {
    const [comment, setComment] = useState('')
    return (
        <form className="addPost">
            <input value={comment} type="text" placeholder="Wat vind je hiervan..." onChange={e => {setComment(e.target.value)}} />
            <button type="submit" id="addCommentBtn" onClick={e => {e.preventDefault(); addComment(comment); setComment('');}}>Reageren</button>
        </form>
    )
}

export default AddComment