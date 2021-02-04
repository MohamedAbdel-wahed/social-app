import * as Yup from "yup"


export const postSchema = Yup.object().shape({
  content: Yup.string().required(),
})