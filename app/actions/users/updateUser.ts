"use server";

import { ISnackProps } from "../../ui/dashboard/snack";

export async function updateUser(prevState: any, formData: FormData) {
  let result: ISnackProps = { message: " ", status: undefined };

  try {
    
    return result;
  } catch (e) {
    
    result = { message: "Failed to fetch.", status: "error" };
    return result;
  }
}
