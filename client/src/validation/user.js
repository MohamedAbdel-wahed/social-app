import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be valid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 chars at least"),
})

export const registerSchema = Yup.object().shape({
  fName: Yup.string().required("first name is required"),
  lName: Yup.string().required("last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be valid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 chars at least"),
  confirmPassword: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
})
