"use client";

import { fetchProducts, setPage } from "@/lib/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
    const dispatch = useDispatch();
  const { items, currentPage, perPage, totalPages, loading, error } =
    useSelector((state) => state.products);



    const handleClick = () =>{
        dispatch(setPage(currentPage + 1))
    }

    useEffect(() => {
        if (items.length === 0) {
          dispatch(fetchProducts()); // Dispatch your function inside Redux
        }
      }, [dispatch, items.length]);


      console.log(items.products);

  return (
    <>
      list
      {items}
      <br />
      {loading.toString()}
      <br />
      {perPage}
      <br />
      {currentPage}
      <br />
      {totalPages}
      <br />
      {error}

      <button onClick={handleClick}>
        click page
      </button>
    </>
  );
};

export default ProductsList;
