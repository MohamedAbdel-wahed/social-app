import React,{useState} from 'react'
import { FaTrash,FaEdit,FaHeart } from "react-icons/fa"
import moment from 'moment'

import FormModal from './FormModal'
import RemovePostModal from './RemovePostModal'


function Post({_id,content,createdAt}) {

  const [editPostModal,setEditPostModal]= useState(false)
  const [removePostModal,setRemovePostModal]= useState(false)
  
  return (
    <div className="w-11/12 sm:w-9/12 md:w-7/12 xl:w-1/2 my-2.5 px-3.5 sm:px-6 py-3 bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold text-gray-800 text-lg">Jane Doe</h1>
          <span className="text-xs text-gray-600 tracking-wide">
            {moment(createdAt).format("ll")}
             &nbsp;&nbsp;
            {moment(createdAt).format("LT")}
          </span>
        </div>
        <div className="flex sm:space-x-2 items-center">
          <button
            onClick={() => setEditPostModal(true)}
            className="px-2 py-1 text-sm font-semibold text-blue-600 focus:text-blue-400 focus:outline-none rounded-lg"
          >
            <FaEdit size="1.5em" />
          </button>
          <button
            onClick={() => setRemovePostModal(true)}
            className="px-2 py-1 text-sm font-semibold text-red-600 focus:text-red-400 focus:outline-none rounded-lg"
          >
            <FaTrash size="1.5em" />
          </button>
        </div>
        {editPostModal && (
          <FormModal setModal={setEditPostModal} content={content} id={_id} />
        )}

        {removePostModal && (
          <RemovePostModal setModal={setRemovePostModal} id={_id} />
        )}
      </div>
      <div className="mt-2 bg-gray-50 p-1">
        <p className="text-gray-800 break-all">{content}</p>
      </div>
      <div className="mt-3.5">
        <button className="inline-block my-2 text-green-400 focus:outline-none">
          <FaHeart size="1.6em" />
        </button>
      </div>
    </div>
  )
}

export default Post
