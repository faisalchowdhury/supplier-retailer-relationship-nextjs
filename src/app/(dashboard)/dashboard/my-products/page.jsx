import React from "react";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { ProductTable } from "./components/ProductTable";
const MyProducts = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const fetchProduct = await fetch(
    `${process.env.NEXTAUTH_URL}/api/products?email=${email}`
  );
  const res = await fetchProduct.json();

  console.log(res);
  return (
    <>
      <ProductTable products={res}></ProductTable>
    </>
  );
};

export default MyProducts;
