import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
  let decodedTokenData = null
  try {
    const token = req.headers.authorization.split(" ")[1]

    const isUserToken = token.length < 500

    // check if it's user token or google token
    if (token && isUserToken) {
      const decodedTokenData = jwt.verify(token, process.env.JWT_SECRET)

      req.userId = decodedTokenData?.id
    } else {
      const decodedTokenData = jwt.decode(token)

      req.userId = decodedTokenData?.sub
    }

    next()
  } catch (error) {
    console.log(error)
  }
}

export default authMiddleware
