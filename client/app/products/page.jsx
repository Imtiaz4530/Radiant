"use client";

import CartDrawer from "@/component/CartDrawer";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

const Products = () => {
  const cart = useStoreState((state) => state);
  const cartAction = useStoreActions((action) => action);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    cartAction.cart.addText(text);
  };

  return (
    <div>
      <h1>Products</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default Products;
