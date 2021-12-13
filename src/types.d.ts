interface Post {
    content: string
    user?: string
    //comments: string[]
    //likes: number
}

type AddPost = (content: string) => void