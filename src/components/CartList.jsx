'use client'

import { useDispatch, useSelector } from "react-redux";

const  CartList = () =>{

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);


    console.log(cart);
    
    
return(
    <>
    I am cart list
    </>
)
}

export default CartList