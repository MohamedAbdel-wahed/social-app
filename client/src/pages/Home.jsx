import React from "react"

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center pb-32 sm:pb-20 justify-center bg-gray-900  select-none">
      <img src="/images/logo.svg" className="w-48 sm:w-64" alt="logo" />
      <h1 className="mt-2 text-2xl sm:text-5xl font-semibold text-pink-900 tracking-wide">
        Your Favourite Social App
      </h1>
      <p className="sm:mt-2 text-sm sm:text-xl text-pink-700 font-semibold tracking-wide">
        connect your thoughts to the world
      </p>
    </div>
  )
}

export default Home
