
import { getUsers } from "@/app/lib/data/users/getUsers";
import UserMain from "@/app/ui/dashboard/users/main";

import * as React from "react";

export interface IPageProps {}

export default async function Page(props: IPageProps) {

  const fetchedUsers = await getUsers(); 

  return <UserMain fetchedUsers={fetchedUsers} />;
}
