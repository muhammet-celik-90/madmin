"use server";

import { revalidatePath } from "next/cache";
import { ISnackProps } from "../ui/dashboard/snack";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  category: z.string(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  color: z.string(),
  size: z.string(),
  description: z.string(),
});

export async function addProduct(prevState: any, formData: FormData) {
  let result: ISnackProps = { message: " ", status: undefined };

  try {
    //await createItem(formData.get('todo'))
    //return revalidatePath('/')

    const parsed = schema.parse({
      title: formData.get("title"),
      category: formData.get("category"),
      price: formData.get("price"),
      stock: formData.get("stock"),
      color: formData.get("color"),
      size: formData.get("size"),
      description: formData.get("description"),
    });

    //console.log(formData);
    result = { message: "Successfully added.", status: "success" };
    return result;
  } catch (e) {
    let result: ISnackProps = { message: " ", status: undefined };
    if (e instanceof z.ZodError) {
      e.issues.map((error) => {
        result = {
          message: `Error: *${error.path}*. ${error.message}`,
          status: "error",
        };
      });
      return result;
    } else {
      result = { message: "Failed to fetch.", status: "error" };
      return result;
    }
  }
}
