import Link from "next/link";
import React from 'react'
import { Card } from "primereact";

type ProductListProps = {
  products: TProduct[];
};

const mapProductCard = (products: TProduct[]) => 
  products.map(({ image, name, price, id }) => (
      <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
        <Card header={name}>Alta carta</Card>
      </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <div>{mapProductCard(products)}</div>
);

export default ProductList;
