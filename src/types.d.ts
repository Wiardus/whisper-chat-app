interface Post {
    content: string
    user?: string
    comments?: string[]
}

type AddPost = (content: string) => void

type AddComment = (comment: string) => void

interface PostComment {
    text: string
}

