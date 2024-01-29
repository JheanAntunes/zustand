'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import * as z from 'zod'
import { usePostStore } from '../store/posts-store'
const schemaFormPost = z.object({
  titlePost: z
    .string()
    .min(3, { message: 'Por favor, coloque um título para seu post' }),
  descriptionPost: z
    .string()
    .min(3, { message: 'Por favor, coloque uma descrição para seu post' })
})

export const actionFormPost = async (form: FormData) => {
  const addPost = usePostStore.getState().setPost

  try {
    //form: get data
    const dataForm = {
      titlePost: form.get('titlePost'),
      descriptionPost: form.get('descriptionPost')
    }
    //validated
    const validatedData = schemaFormPost.safeParse(dataForm)
    if (!validatedData.success) {
      // message para o campo que está inválido
      // validatedData.error.flatten().fieldErrors
      throw new Error('Error na validação de dados do formulário.')
    }
    // add post
    addPost({ ...validatedData.data, id: uuidv4() })
    //revalidar o cache do segmento
    revalidatePath('/')
    //redirect
    redirect('/')
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
