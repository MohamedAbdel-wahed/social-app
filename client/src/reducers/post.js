export const postReducer= (state= [],action)=> {
  switch(action.type){
      case 'GET_POSTS':
        return action.payload
      case 'CREATE_POST':
        return [action.payload, ...state]
      case 'EDIT_POST':
        return state.map(post=> post._id === action.payload._id ? action.payload : post)
      case 'REMOVE_POST':
        return state.filter(post=> post._id !== action.payload)
      default: 
        return state  
  }
}