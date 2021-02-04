import React from "react"
import { Form, Formik } from "formik"
import {useDispatch} from 'react-redux'

import ModalTemplate from '../ModalTemplate'
import {postSchema} from '../../validation/post'
import {setInputHeight} from '../../utils/autoResizeInput'
import {createPost,editPost} from '../../actions/post'


function FormModal({ setModal,content,id }) {
  const dispatch= useDispatch()
  const handleSubmit = (values) => {
     const data= {user: '2', ...values}
     id ? dispatch(editPost(id,data)) : dispatch(createPost(data))
     setModal(false)
  }

  return (
    <ModalTemplate setModal={setModal}>
      <h1 className="mb-3 text-gray-700 font-bold text-2xl text-center">
        {id ? 'Edit Post' : 'Add New Post'}
      </h1>
      <Formik
        initialValues={{ content: "" }}
        onSubmit={handleSubmit}
        validation={postSchema}
      >
        {({ dirty, handleChange, isValid }) => (
          <Form>
            <textarea
              rows="1"
              onChange={handleChange("content")}
              onKeyDown={(e) => setInputHeight(e)}
              name="content"
              className="w-full mt-6 px-3 py-2 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-blue-400"
              placeholder="Type New Post..."
              defaultValue={content || ''}
            ></textarea>
            <button
              type="submit"
              disabled={!isValid || !dirty}
              className={`${isValid && dirty ? "bg-blue-500" : "bg-blue-300"}
                my-2 px-3 py-1.5 text-sm text-white font-semibold focus:outline-none rounded-lg`}
            >
              {id ? 'Save Changes' : 'Create Post'}
            </button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  )
}

export default FormModal
