"use server";

import { revalidatePath } from "next/cache";
import { ISnackProps } from "../../ui/dashboard/snack";
import { z } from "zod";

export async function addUser(prevState: any, formData: FormData) {
  let result: ISnackProps = { message: " ", status: undefined };

  try {
    //await createItem(formData.get('todo'))
    //return revalidatePath('/')

    //console.log(formData);
    result = { message: "Successfully added.", status: "success" };
    return result;
  } catch (e) {
    result = { message: "Failed to fetch.", status: "error" };
    return result;
  }
}
