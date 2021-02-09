import {combineReducers} from 'redux'
import {postReducer} from './post'
import {authReducer} from './auth'

const reducers= combineReducers({
  posts: postReducer,
  auth: authReducer,
})

export default reducers
