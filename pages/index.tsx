import { useEffect, useState } from "react";
import React from 'react'
import ProductList from "../components/productList";

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/product")
      .then((res) => res.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
    {/* <div style={{backgroundColor: 'red', height: 300, width: 300}} ></div> */}
    {/* {productList.map(product => {
        return(
        <p key={product.id}>{product.name}</p>
        )
    })} */}
        <ProductList products={productList} />
    </>
  )
};

export default HomePage;
