import { create } from 'zustand'

type Post = {
  id: string
  titlePost: string
  descriptionPost: string
}

type PostState = {
  posts: Post[]
}

type Actions = {
  setPost: (post: Post) => void
  deletePost: (id: string) => void
  getPost: (id: string) => Post | undefined
}

export const usePostStore = create<PostState & Actions>()((set, get) => ({
  posts: [],
  deletePost: (id) => {
    set((statePost) => ({
      posts: statePost.posts.filter((post) => post.id !== id)
    }))
  },
  getPost(id) {
    const post = get().posts.find((post) => post.id === id)
    return post
  },
  setPost(post) {
    set((state) => ({ posts: [...state.posts, post] }))
  }
}))
