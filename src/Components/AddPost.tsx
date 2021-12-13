import { useState } from 'react';

interface Props {
    addPost: AddPost
}

const AddPost = ({addPost}: Props) => {
    const [content, setContent] = useState('')
    return (
        <form className="addPost">
            <input value={content} type="text" placeholder="Wat wil je kwijt..." onChange={e => {setContent(e.target.value)}} />
            <button type="submit" id="addPostBtn" onClick={e => {e.preventDefault(); addPost(content); setContent('');}}>Fluisteren</button>
        </form>
    )
}

export default AddPost