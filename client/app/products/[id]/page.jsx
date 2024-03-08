"use client";

import { fetchProduct } from "@/utils/fetchProducts";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProduct(id);
        setData(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  const imageLoader = ({ src }) => {
    return `http://localhost:1337${src}`;
  };

  const product = data?.product?.data?.attributes;
  return (
    <>
      <Link className="link" href={"/products"}>
        <h4>back -</h4>
      </Link>

      <div className="productDetails">
        <h2>{product?.name}</h2>
        <h4>{product?.description}</h4>
        <p>{product?.price}</p>
        {product?.Variation.map((item) => (
          <div key={item.id}>
            <Image
              src={item?.productImage?.data?.attributes?.url}
              width={200}
              height={200}
              alt="description"
              loader={imageLoader}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
