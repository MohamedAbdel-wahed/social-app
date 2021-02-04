import React from 'react'

function ModalTemplate({children,setModal}) {
  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden flex justify-center items-center">
      <button
        onClick={() => setModal(false)}
        className="w-full h-full fixed inset-0 bg-gray-800 bg-opacity-70 cursor-default"
      ></button>
      <div
        className="w-11/12 sm:w-2/3 md:w-7/12 lg:w-1/2 xl:w-5/12 mt-20 mb-16 px-5 py-4 bg-white border border-gray-300 rounded-lg shadow-md z-20"
      >
        {children}
      </div>
    </div>
  )
}

export default ModalTemplate
