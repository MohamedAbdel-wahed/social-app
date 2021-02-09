export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("authData", JSON.stringify({ ...action.payload }))
      return { ...state, authData: action.payload }
    case "LOGIN":
      localStorage.setItem("authData", JSON.stringify({ ...action.payload }))
      return { ...state, authData: action.payload }
    case "REGISTER":
      localStorage.setItem("authData", JSON.stringify({ ...action.payload }))
      return { ...state, authData: action.payload }
    case "LOGOUT":
      localStorage.removeItem("authData")
      return { ...state, authData: action.payload }
    default:
      return state
  }
}
