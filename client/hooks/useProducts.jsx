"use client";
import { fetchProducts } from "@/utils/fetchItems";
import { useQuery, keepPreviousData } from "react-query";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["Products"],
    placeholderData: keepPreviousData,
  });
  const products = data?.products?.data?.map((item) => {
    const { id, attributes } = item;
    const {
      discount,
      display,
      name,
      price,
      title,
      brand,
      category,
      descriptionImage,
      productImage,
      variation,
      displayImage,
    } = attributes;

    const { name: brandName } = brand?.data?.attributes;
    const { categoryName } = category?.data?.attributes;

    const proImage = productImage.data.map((item) => {
      const { id, attributes } = item;
      const { url } = attributes;

      return { id, url };
    });

    const descImage = descriptionImage.data.map((item) => {
      const { id, attributes } = item;
      const { url } = attributes;

      return { id, url };
    });

    const { url } = displayImage?.data?.attributes;

    return {
      id,
      discount,
      display,
      name,
      price,
      title,
      brandName,
      categoryName,
      variation,
      proImage,
      descImage,
      displaYImage: url,
    };
  });

  return {
    productData: products,
    productLoading: isLoading,
    productError: error,
  };
};

export const useDiscountProduct = () => {
  const {
    productData,
    productLoading: discountLoading,
    productError: discountError,
  } = useProducts();
  const discountProducts = productData?.filter((item) => item.discount);

  return {
    discountProducts,
    discountError,
    discountLoading,
  };
};
