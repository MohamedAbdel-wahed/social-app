import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Form } from "formik"
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux"

import { loginSchema } from "../../validation/user"
import { loginUser } from "../../actions/auth"

const GOOGLE_ID =
  "560142262030-ikdbr631gbib95iovr0bnp1vso3imgbf.apps.googleusercontent.com"

function Login({ inputStyle, SubmitButton, SwitchButton, GoogleButton }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const responseGoogle = (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: "AUTH", payload: { result, token } })
      history.push("/timeline")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (values) => {
    dispatch(loginUser(values, history))
  }

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12 mt-5 p-8 pt-3 flex flex-col items-center bg-white shadow-md rounded-md">
      <GoogleLogin
        clientId={GOOGLE_ID}
        render={({ onClick, disabled }) => (
          <GoogleButton onClick={onClick} disabled={disabled} />
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <h1 className="mt-4 text-gray-700 text-xl sm:text-3xl lg:text-4xl text-center font-semibold uppercase">
        Or
      </h1>
      <h1 className="mt-2 text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cente capitalize">
        Sign in to your account
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({
          dirty,
          handleChange,
          isValid,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <Form className="mt-2 w-full">
            <div className="my-4">
              <input
                type="text"
                name="email"
                autoComplete="off"
                onChange={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                placeholder="Email Address"
                className={inputStyle}
              />
              {errors.email && touched.email && (
                <p className="my-1 px-2 text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="my-4">
              <input
                type="password"
                name="password"
                autoComplete="off"
                onChange={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                placeholder="Password"
                className={inputStyle}
              />
              {errors.password && touched.password && (
                <p className="my-1 px-2 text-red-600 text-sm">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="w-full flex space-x-2">
              <SubmitButton disabled={!isValid || !dirty} />
              <SwitchButton text="Don't have an account?" route="register" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
