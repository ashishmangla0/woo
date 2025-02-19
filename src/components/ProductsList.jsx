import { fetchProducts, setPage } from "@/lib/productsSlice";
import { getProducts } from "@/utils/wooUtils";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./Products";

const ProductsList = async () => {
  // const dispatch = useDispatch();
  // const { items, currentPage, perPage, totalPages, loading, error } =
  //   useSelector((state) => state.products);

  // const handleClick = () => {
  //   dispatch(setPage(currentPage + 1));
  // };

  // useEffect(() => {
  //   if (items.length === 0) {
  //     dispatch(fetchProducts()); // Dispatch your function inside Redux
  //   }
  // }, [dispatch]);
  const { products, totalItems, totalPages } = await getProducts();

  return (
    <div className="container">
    <div className="row">
    {products?.length > 0 &&
        products?.map(
          (item) => item && <ProductItem key={item.id} {...item} />
        )}
    </div>
     

     
      {totalPages}
      <br />

      <button>click page</button>
    </div>
  );
};

export default ProductsList;
