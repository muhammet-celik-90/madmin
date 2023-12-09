
import * as React from "react";
import { getSingleUser } from "@/app/lib/data/users/getUsers";
import SingleUser from "@/app/ui/dashboard/users/singleuser";

export interface IPageProps {
  params: { id: number };
}

export default async function Page({ params }: IPageProps) {

  const singleUser = await getSingleUser(params.id);

  return <SingleUser singleUser={singleUser} />;
}
