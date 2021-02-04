import React from 'react'

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 select-none"> 
       <img src="/images/logo.svg" className="w-48 sm:w-64" alt="logo" /> 
       <h1 className="my-2 text-2xl sm:text-5xl font-semibold">Your Favourite Social App</h1>
       <p className="sm:my-1 text-base sm:text-xl">connect your thoughts to the world</p>
    </div>
  )
}

export default Home
