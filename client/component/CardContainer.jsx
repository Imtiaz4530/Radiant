"use client";
import { useDiscountProduct, useProducts } from "@/hooks/useProducts";
import ProductCard from "./reusable/ProductCard";
import { usePathname } from "next/navigation";

const CardContainer = ({ dc }) => {
  const { productData, productLoading, productError } = useProducts();
  const { discountProducts, discountError, discountLoading } =
    useDiscountProduct();

  const path = usePathname();

  let data;
  if (path === "/") {
    data = discountProducts?.slice(0, 8);
  } else {
    data = discountProducts;
  }

  console.log(data);
  return (
    <>
      {dc ? (
        <ProductCard
          data={data}
          loading={discountLoading}
          error={discountError}
        />
      ) : (
        <ProductCard
          data={productData}
          loading={productLoading}
          error={productError}
        />
      )}
    </>
  );
};

export default CardContainer;
