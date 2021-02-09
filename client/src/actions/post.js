import {
  fetch_posts,
  create_post,
  edit_post,
  remove_post,
  like_post,
} from "../api"

export function getPosts() {
  return async (dispatch) => {
    try {
      const posts = await fetch_posts()
      dispatch({ type: "GET_POSTS", payload: posts.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export function createPost(data) {
  return async (dispatch) => {
    try {
      const newPost = await create_post(data)
      dispatch({ type: "CREATE_POST", payload: newPost.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export function editPost(id, data) {
  return async (dispatch) => {
    try {
      const updatedPost = await edit_post(id, data)
      dispatch({ type: "EDIT_POST", payload: updatedPost.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export function removePost(id) {
  return async (dispatch) => {
    try {
      await remove_post(id)
      dispatch({ type: "REMOVE_POST", payload: id })
    } catch (error) {
      console.log(error)
    }
  }
}

export function likePost(id) {
  return async (dispatch) => {
    try {
      const updatedPost = await like_post(id)
      dispatch({ type: "LIKE_POST", payload: updatedPost.data })
    } catch (error) {
      console.log(error)
    }
  }
}
