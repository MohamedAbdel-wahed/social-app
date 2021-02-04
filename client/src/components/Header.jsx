import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function Header() {
  return (
    <div className="w-full h-16 fixed top-0 flex items-center bg-gray-800 text-white overflow-x-hidden">
      <div className="flex items-center mx-10">
        <h1 className="text-xl sm:text-2xl font-bold">
          <Link to="/" exact="true">
            Social App
          </Link>
        </h1>
      </div>
      <ul className="ml-auto mr-12 flex">
        <li className="uppercase font-semibold mr-8">
          <NavLink to="/timeline">Timeline</NavLink>
        </li>
        <li className="uppercase font-semibold mr-8">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="uppercase font-semibold mr-8">
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
