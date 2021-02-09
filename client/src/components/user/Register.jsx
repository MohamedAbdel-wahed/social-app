import React from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Formik, Form } from "formik"

import { registerSchema } from "../../validation/user"
import { registerUser } from "../../actions/auth"

function Register({ inputStyle, SubmitButton, SwitchButton }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (values) => {
    dispatch(registerUser(values, history))
  }

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12 px-4 pb-6 pt-2 flex flex-col items-center bg-white shadow-md rounded-md">
      <h1 className="my-2 text-gray-700 text-5xl text-center">Sign up</h1>
      <Formik
        initialValues={{
          fName: "",
          lName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {({
          dirty,
          handleChange,
          isValid,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <Form className="mt-4 w-full">
            <div className="my-3 flex justify-between space-x-2.5">
              <div className="w-1/2">
                <input
                  type="text"
                  name="fName"
                  autoComplete="off"
                  onChange={handleChange("fName")}
                  onBlur={() => setFieldTouched("fName")}
                  placeholder="First Name"
                  className={inputStyle}
                />
                {errors.fName && touched.fName && (
                  <p className="mt-1 px-2 text-red-600 text-sm">
                    {errors.fName}
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <input
                  type="text"
                  name="lName"
                  autoComplete="off"
                  onChange={handleChange("lName")}
                  onBlur={() => setFieldTouched("lName")}
                  placeholder="Last Name"
                  className={inputStyle}
                />
                {errors.lName && touched.lName && (
                  <p className="mt-1 px-2 text-red-600 text-sm">
                    {errors.lName}
                  </p>
                )}
              </div>
            </div>

            <div className="my-3">
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
                <p className="mt-1 px-2 text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="my-3">
              <input
                type="password"
                name="password"
                onChange={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                placeholder="Password"
                className={inputStyle}
              />
              {errors.password && touched.password && (
                <p className="mt-1 px-2 text-red-600 text-sm">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="my-3">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange("confirmPassword")}
                onBlur={() => setFieldTouched("confirmPassword")}
                placeholder="Password Confirmation"
                className={inputStyle}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="mt-1 px-2 text-red-600 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="w-full flex space-x-2 items-center">
                <SubmitButton disabled={!isValid || !dirty} />
                <SwitchButton
                  text="You have an account already?"
                  route="login"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register
