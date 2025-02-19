'use client'
import Store from '@/lib/store';
import { Provider } from 'react-redux';

const StoreProvider = (    {children}) =>{
return(
    <Provider store={Store}>
    I am provider
    {children}
    </Provider>
)
}

export default StoreProvider