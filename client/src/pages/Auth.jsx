import React, { useState } from "react"
import { FaGooglePlus } from "react-icons/fa"

import Login from "../components/user/Login"
import Register from "../components/user/Register"

const inputStyle =
  "w-full px-3 py-2 text-gray-800 bg-gray-200 border border-gray-100 focus:outline-none focus:bg-yellow-50 focus:border-blue-400 rounded-md"

const SubmitButton = ({ disabled }) => (
  <button
    type="submit"
    disabled={disabled}
    className={`${
      !disabled ? "text-white bg-blue-600" : "text-gray-500 bg-blue-100"
    }
    flex-1 h-9 mt-2 px-4 py-2 text-sm font-semibold tracking-wide rounded-lg focus:outline-none`}
  >
    Submit
  </button>
)

const GoogleButton = ({ onClick, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    type="button"
    className={` ${
      disabled && "bg-opacity-60"
    } w-11/12 flex justify-center items-center mt-4 px-4 py-2 font-semibold bg-red-500 focus:bg-red-800 text-white tracking-wide rounded-full focus:outline-none transition-all duration-300 ease-in-out`}
  >
    <span className="text-sm tracking-wide">Sign in with Google</span>
    <FaGooglePlus size="1.2em" className="ml-1" />
  </button>
)

function Auth() {
  const [authRoute, setAuthRoute] = useState("login")

  const SwitchButton = ({ text, route }) => (
    <button
      type="button"
      onClick={() => setAuthRoute(route)}
      className="w-1/2 mt-2 text-sm focus:outline-none text-gray-500 hover:text-blue-500 hover:underline focus:text-purple-600"
    >
      {text}
    </button>
  )

  return (
    <div className="w-full h-screen pt-24 bg-gray-100 overflow-hidden select-none">
      <div className="w-full flex justify-center px-2.5">
        {authRoute === "login" && (
          <Login
            inputStyle={inputStyle}
            SubmitButton={SubmitButton}
            SwitchButton={SwitchButton}
            GoogleButton={GoogleButton}
          />
        )}
        {authRoute === "register" && (
          <Register
            inputStyle={inputStyle}
            SubmitButton={SubmitButton}
            SwitchButton={SwitchButton}
          />
        )}
      </div>
    </div>
  )
}

export default Auth
