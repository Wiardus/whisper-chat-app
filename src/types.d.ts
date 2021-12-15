interface Post {
    content: string
    user?: string
    comment?: string
}

type AddPost = (content: string) => void

type AddComment = (comment: string) => void

type EditPost = (content: string) => void

interface PostComment {
    text: string
}

