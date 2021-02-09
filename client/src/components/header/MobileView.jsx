import React from "react"
import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"

function MobileView({ user, menu, setMenu, logout }) {
  return (
    <>
      {menu && (
        <button
          onClick={() => setMenu(false)}
          className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-70 z-20 cursor-default"
        ></button>
      )}
      <div className="py-4 md:hidden  ml-auto">
        {menu && (
          <motion.div
            initial={{ y: -2000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="w-full h-80 fixed inset-0 bg-gray-900 bg-opacity-90 z-30"
          >
            <ul className="flex flex-col items-center">
              <li className="p-4" onClick={() => setMenu(false)}>
                <Link exact="true" to="/" className="flex items-end space-x-2">
                  <img
                    src="/images/logo.svg"
                    className="w-14 rounded-full"
                    alt="logo"
                  />
                  <span className="text-3xl font-semibold">Social App</span>
                </Link>
              </li>
              {user ? (
                <>
                  <li
                    className="mt-4 p-4 uppercase text-3xl tracking-wider text-gray-300"
                    onClick={() => setMenu(false)}
                  >
                    <NavLink to="/timeline">TimeLine</NavLink>
                  </li>
                  <li
                    className="mt-12 p-4 uppercase font-semibold"
                    onClick={logout}
                  >
                    <span className="px-5 py-2 inline-block bg-pink-500 rounded-sm tracking-wide cursor-pointer">
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <li
                  className="mt-12 p-4 uppercase text-3xl tracking-wider text-gray-300"
                  onClick={() => setMenu(false)}
                >
                  <NavLink to="/auth">Login</NavLink>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default MobileView
