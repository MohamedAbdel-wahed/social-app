import axios from "axios"

const api = axios.create({
  baseURL: "https://social-app-mern-stack.herokuapp.com/",
})

api.interceptors.request.use((req) => {
  const existingToken = JSON.parse(localStorage.getItem("authData"))

  if (existingToken) {
    req.headers.Authorization = `Bearer ${existingToken.token}`
  }

  return req
})

// post
export const fetch_posts = () => api.get("/api/posts")
export const create_post = (data) => api.post("/api/posts", data)
export const edit_post = (id, data) => api.patch(`/api/posts/${id}`, data)
export const remove_post = (id) => api.delete(`/api/posts/${id}`)
export const like_post = (id) => api.patch(`/api/posts/${id}/like`)

// user
export const login = (data) => api.post("/api/auth/login", data)
export const register = (data) => api.post("/api/auth/register", data)
