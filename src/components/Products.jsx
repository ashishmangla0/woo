"use client";
import { addToCart } from "../lib/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { id, sku, name, images, price, categories } = props;
  const handleAddToCart = (item) => {
    const { id, sku, name, price } = item;
    console.log(name);
    console.log(id);
    console.log(sku);
    console.log(price);

    dispatch(addToCart({ id: id, name:name, price: price }));
console.log(cart);

    
  };

  return (
    <div className="product-thumbnail" key={id || sku} >
      <div  className="product-link">
        <div className="product-link-wrapper">
          <Link className="product-img" href={"/"}>
            <Image
              src={
                images?.[0]?.src ||
                "https://shop.aavyamart.com/wp-content/uploads/woocommerce-placeholder.png"
              }
              fill
              alt={name}
            />
          </Link>

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
      </div>
    </div>
  );
};

export default ProductItem;
