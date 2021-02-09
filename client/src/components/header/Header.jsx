import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FiMenu } from "react-icons/fi"
import decode from "jwt-decode"

import LaptopView from "./LaptopView"
import MobileView from "./MobileView"

function Header() {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authData")))
  const [menu, setMenu] = useState(false)

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null })
    setMenu(false)
    setUser(null)
    history.push("/auth")
  }

  useEffect(() => {
    if (user?.token) {
      new Date(decode(user?.token) * 1000) < new Date() && logout()
    }

    setUser(JSON.parse(localStorage.getItem("authData")))
  }, [location])

  return (
    <div className="w-full h-16 fixed top-0 flex items-center bg-gray-800 text-white overflow-x-hidden select-none">
      <LaptopView user={user} logout={logout} />
      <div className="w-full mx-5 flex md:hidden">
        {!menu && (
          <button
            onClick={() => setMenu(true)}
            className="focus:outline-none md:hidden"
          >
            <FiMenu size="2em" />
          </button>
        )}
        {user && (
          <div className="flex space-x-2 items-center ml-auto">
            <h1 className="text-lg font-semibold text-gray-200 capitalize">
              {user.result.name}
            </h1>
            <img
              src={`https://ui-avatars.com/api/?name=${user.result.name}`}
              className="w-10 rounded-full"
              alt="profileImg"
            />
          </div>
        )}
      </div>
      <MobileView user={user} menu={menu} setMenu={setMenu} logout={logout} />
    </div>
  )
}

export default Header
