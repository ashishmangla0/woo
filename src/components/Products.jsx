"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, sku, name, images, price, categories } = props;
  const handleAddToCart = (item) => {
    const { id, sku, name, price } = item;
    console.log(name);
    console.log(id);
    console.log(sku);
    console.log(price);
  };

  return (
    <div className="product-thumbnail" key={id || sku} >
      <Link href={"/"} className="product-link">
        <div className="product-link-wrapper">
          <div className="product-img">
            <Image
              src={
                images?.[0]?.src ||
                "https://shop.aavyamart.com/wp-content/uploads/woocommerce-placeholder.png"
              }
              fill
              alt={name}
            />
          </div>

          <div className="product-action">
            <button
              onClick={() => handleAddToCart(props)}
              className="button product-button "
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="product-content-wrapper">
          {categories.length > 0 && (
            <div className="product-brand">
              {categories?.map((cat) => <span key={cat?.id}>{cat?.name}</span>)}
            </div>
          )}
          <h2 className="product-title">{name}</h2>
          <div>{price}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
