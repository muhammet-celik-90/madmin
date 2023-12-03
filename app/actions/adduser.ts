"use server";

import { revalidatePath } from "next/cache";
import { ISnackProps } from "../ui/dashboard/snack";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8, {message: "Must be at least 8 characters"}),
  phone: z.string(),
  isadmin: z.boolean(),
  isactive: z.boolean(),
  adress: z.string(),
})

export async function addUser(prevState: any, formData: FormData) {
  let result: ISnackProps = {message: ' ', status: undefined}

  try {
    //await createItem(formData.get('todo'))
    //return revalidatePath('/')

    const parsed = schema.parse({
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone'),
      isadmin: formData.get('isadmin'),
      isactive: formData.get('isactive'),
      adress: formData.get('adress'),
    })
    
    //console.log(formData);
    result = { message: "Successfully added.", status: "success" };
    return result;
  } catch (e) {
    let result: ISnackProps = {message: ' ', status: undefined}
    if (e instanceof z.ZodError) {
      e.issues.map((error) => {
        result = { message: `Error: *${error.path}*. ${error.message}`, status: "error" };
      })
      return result;
    }else {
      result = { message: "Failed to fetch.", status: "error" };
      return result;
    }
  }
}
