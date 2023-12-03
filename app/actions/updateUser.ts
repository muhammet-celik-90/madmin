"use server";

import { upUser } from "../lib/data/upUser";
import { ISnackProps } from "../ui/dashboard/snack";
import { z } from "zod";

export async function updateUser(prevState: any, formData: FormData) {
  let result: ISnackProps = { message: " ", status: undefined };

  try {
    const isUpdated = await upUser(formData);

    if(isUpdated) result = { message: "Successfully updated.", status: "success" };
    console.log(result)
    return result;
  } catch (e) {
    result = { message: "Failed to fetch.", status: "error" };
    console.log(result)
    return result;
  }
}
