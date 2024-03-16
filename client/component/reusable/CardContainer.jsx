"use client";
import { useDiscountProduct, useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
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

  return (
    <>
      <ProductCard
        data={dc ? data : productData}
        loading={dc ? discountLoading : productLoading}
        error={dc ? discountError : productError}
      />
    </>
  );
};

export default CardContainer;
