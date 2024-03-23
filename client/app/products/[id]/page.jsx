"use client";
import { useProduct } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();

  const data = useProduct(parseInt(id));
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;
