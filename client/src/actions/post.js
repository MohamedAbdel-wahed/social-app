import axios from 'axios'


export function getPosts(){
  return async(dispatch)=> {
     try {
       const posts= await axios.get('/api/posts')
       dispatch({type: 'GET_POSTS', payload: posts.data})
     } 
     catch (error) {
       console.log(error)
     }
  }
}


export function createPost(data){
  return async(dispatch)=> {
     try {
       const newPost= await axios.post('/api/posts', data)
       dispatch({type: 'CREATE_POST', payload: newPost.data})
     } 
     catch (error) {
       console.log(error)
     }
  }
}

export function editPost(id,data){
  return async(dispatch)=> {
     try {
       const updatedPost= await axios.patch(`/api/posts/${id}`, data)
       dispatch({type: 'EDIT_POST', payload: updatedPost.data})
     } 
     catch (error) {
       console.log(error)
     }
  }
}

export function removePost(id){
  return async(dispatch)=> {
     try {
       await axios.delete(`/api/posts/${id}`)
       dispatch({type: 'REMOVE_POST', payload: id})
     } 
     catch (error) {
       console.log(error)
     }
  }
}