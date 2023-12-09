
import * as React from "react";
import ProductsMain from "@/app/ui/dashboard/products/main";
import { getProducts } from "@/app/lib/data/products/getProducts";

export interface IPageProps {}

export default async function Page(props: IPageProps) {

  const products = await getProducts();

  return <ProductsMain products={products}/>;
}
