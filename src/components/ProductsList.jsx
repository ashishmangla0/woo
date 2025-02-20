import { getProducts } from "../utils/wooUtils";
import ProductItem from "./Products";
const ProductsList = async () => {
  const { products, totalItems, totalPages } = await getProducts();

  return (
    <div className="container">
      <div className="row">
        {products?.length > 0 &&
          products?.map(
            (item) => <ProductItem key={item.id} {...item} />
          )}
      </div>
    </div>
  );
};

export default ProductsList;
