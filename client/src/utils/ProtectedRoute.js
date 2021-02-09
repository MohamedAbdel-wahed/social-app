import { Redirect, Route } from "react-router-dom"

function ProtectedRoute(props) {
  const authUser = localStorage.getItem("authData")

  if (authUser && props.authForm) {
    return <Redirect to="/timeline" />
  } else if (!authUser && props.timeline) {
    return <Redirect to="/auth" />
  } else {
    return <Route {...props} component={props.component} />
  }
}

export default ProtectedRoute
