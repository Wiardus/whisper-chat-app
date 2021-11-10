interface Post {
    content: string
    //comments: string[]
    //likes: number
}

type AddPost = (content: string) => void