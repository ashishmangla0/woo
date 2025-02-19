'use client'

import { fetchProducts } from "@/utils/wooUtils"


const StoreProvider = ({children}) =>{

    fetchProducts(1,10)
    return  (
        <>
        
        I am StoreProvider
        {
            children
        }
        </>
    )
}

export default StoreProvider