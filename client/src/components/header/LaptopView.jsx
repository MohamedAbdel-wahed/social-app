import React from "react"
import { Link, NavLink } from "react-router-dom"

function LaptopView({ user, logout }) {
  return (
    <>
      <div className="hidden md:flex items-center mx-8">
        <h1 className="text-xl sm:text-2xl font-bold">
          <Link exact="true" to="/" className="flex items-center space-x-1">
            <img
              src="/images/logo.svg"
              className="w-11 rounded-full"
              alt="logo"
            />
            <span>Social App</span>
          </Link>
        </h1>
        <ul className="ml-12 flex">
          {user && (
            <li className="uppercase font-semibold">
              <NavLink to="/timeline">Timeline</NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="hidden md:flex items-center ml-auto mx-12">
        {user && (
          <div className="flex space-x-1.5 items-center">
            <h1 className="text-lg font-semibold text-gray-200">
              {user?.result.name}
            </h1>

            <img
              src={`https://ui-avatars.com/api/?name=${user.result.name}`}
              className="w-10 rounded-full"
              alt="profileImg"
            />
          </div>
        )}
        <ul className="flex">
          {user ? (
            <li className="uppercase font-semibold ml-16" onClick={logout}>
              <span className="px-3 py-1.5 inline-block bg-pink-500 text-sm rounded-sm tracking-wide cursor-pointer">
                Logout
              </span>
            </li>
          ) : (
            <li className="uppercase font-semibold mr-8">
              <NavLink to="/auth">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default LaptopView
