import { login, register } from "../api"

export const loginUser = (data, history) => async (dispatch) => {
  try {
    const result = await login(data)
    dispatch({ type: "LOGIN", payload: result.data })

    history.push("/timeline")
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = (data, history) => async (dispatch) => {
  try {
    const result = await register(data)

    dispatch({ type: "REGISTER", payload: result.data })

    history.push("/timeline")
  } catch (error) {
    console.log(error)
  }
}
