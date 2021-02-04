import React from 'react'

function AddPostBtn({setModal,phone}) {
  return (
    <div className={`my-2.5 w-full sm:w-1/6 ${phone ? 'flex sm:hidden' : 'hidden sm:flex'} justify-end mb-2 px-6 xl:px-14`}>
      <button
        onClick={() => setModal(true)}
        className="h-12 sm:h-14 rounded-full bg-gray-800 px-4 sm:px-5 text-3xl focus:outline-none text-white hover:bg-opacity-80 transition-all duration-200"
      >
        +
      </button>
    </div>
  )
}

export default AddPostBtn
