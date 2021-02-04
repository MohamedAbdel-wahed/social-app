import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import Post from '../components/post/Post'
import FormModal from '../components/post/FormModal'
import AddPostBtn from '../components/post/AddPostBtn'
import {getPosts} from '../actions/post'


function Timeline() {
  const [newPostModal,setNewPostModal]= useState(false)

  const dispatch= useDispatch()
  useEffect(() => dispatch(getPosts()), [dispatch])
  
  const posts= useSelector(state=> state.posts)

  return (
    <div className="h-screen w-full pt-16 bg-gray-100 select-none">
      <AddPostBtn setModal={setNewPostModal} phone />
      <div className="flex">
        <div className="flex-1">
          <h1 className="mb-3 sm:mb-6 sm:mt-4 text-2xl sm:text-4xl font-semibold text-gray-700 text-center tracking-wider uppercase">
            Timeline
          </h1>
          <div
          id="posts_container"
            className="flex flex-col items-center pb-6 overflow-scroll overflow-x-hidden"
          >
            {posts.length === 0 ? (
              <div className="mt-20 text-2xl font-semibold text-gray-500">
                Loading...
              </div>
            ) : (
              posts.map((post) => <Post key={post._id} {...post} />)
            )}
          </div>
        </div>
        <AddPostBtn setModal={setNewPostModal} />
        {newPostModal && <FormModal setModal={setNewPostModal} />}
      </div>
    </div>
  )
}

export default Timeline
