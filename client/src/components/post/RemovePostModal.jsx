import React from 'react'
import { useDispatch } from 'react-redux'

import ModalTemplate from '../ModalTemplate'
import {removePost} from '../../actions/post'


function RemovePostModal({setModal,id}) {
  const dispatch= useDispatch()

  const handleRemove= ()=> {
      dispatch(removePost(id))
      setModal(false)
  }

  return (
    <ModalTemplate setModal={setModal}>
      <h1 className="mb-3 text-gray-600 font-semibold text-lg text-center">
        Are you sure you want to remove this post?
      </h1>
      <div className="flex justify-center space-x-5">
        <button onClick={()=> setModal(false)} className="px-3 py-1.5 text-sm font-semibold text-white bg-blue-500 focus:bg-opacity-60 focus:outline-none tracking-wide rounded-lg">
          no
        </button>
        <button onClick={handleRemove} className="px-3 py-1.5 text-sm font-semibold text-white bg-red-500 focus:bg-opacity-60 focus:outline-none tracking-wide rounded-lg">
          yes
        </button>
      </div>
    </ModalTemplate>
  )
}

export default RemovePostModal
