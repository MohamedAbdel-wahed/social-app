import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from "../models/user.js"

const jwtSign = (tokenData) => {
  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  })

  return token
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })
    if (!existingUser)
      return res.status(404).json({ message: "user not found!" })

    const isCorrectPwd = await bcrypt.compare(password, existingUser.password)
    if (!isCorrectPwd)
      return res.status(400).json({ message: "password is not correct!" })

    const token = jwtSign({ id: existingUser._id, email: existingUser.email })

    res.status(200).json({ result: existingUser, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const register = async (req, res) => {
  try {
    const { fName, lName, email, password, confirmPassword } = req.body

    const userExists = await User.findOne({ email })

    if (userExists)
      return res.status(404).json({ message: "user exists already" })

    if (password !== confirmPassword)
      return res.status(404).json({ message: "passwords must match" })

    const hashedPwd = await bcrypt.hash(password, 12)

    const newUser = await User.create({
      name: fName + " " + lName,
      email,
      password: hashedPwd,
    })

    const token = jwtSign({ id: newUser._id, email: newUser.email })

    res.status(200).json({ result: newUser, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
