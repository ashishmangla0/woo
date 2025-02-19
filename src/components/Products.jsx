"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, sku, name, images, price } = props;
  console.log(props);

  const handleAddToCart = (item) => {
    const { id, sku, name, price } = item;
    console.log(name);
    console.log(id);
    console.log(sku);
    console.log(price);
  };

  return (
    <div className="product-thumbnail">
      <Link href={"/"} className="product-link">
      <div className="product-link-wrapper">
      <Image
          src={images?.[0]?.src}
          fill
          alt={name}
          className="product-img"
        />
      </div>
       
        <div className="product-content-wrapper">
          <h2 className="product-title">{name}</h2>
          <div>{price}</div>
        </div>
      </Link>

      <button onClick={() => handleAddToCart(props)}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
