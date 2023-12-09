import * as React from 'react';
import SingleProduct from '@/app/ui/dashboard/products/singleproduct';
import { getSingleProduct } from '@/app/lib/data/products/getSingleProduct';

export interface IPageProps {
    params: { id: string}
}

export default async function Page ({params}: IPageProps) {
    const product = await getSingleProduct(params.id);
  return <SingleProduct product={product} />;
}
