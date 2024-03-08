import { fetchProducts } from "@/utils/fetchProducts";
import Link from "next/link";

const Products = async () => {
  const data = await fetchProducts();

  //   console.log(data?.products?.data);
  return (
    <div className="product_main">
      {data?.products?.data.map((item) => (
        <Link key={item?.id} href={`/products/${item.id}`} className="link">
          <div className="product_item">
            <h3>{item?.attributes?.name}</h3>
            <p>{item?.attributes?.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
