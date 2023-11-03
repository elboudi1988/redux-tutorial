import { type } from "@testing-library/user-event/dist/type"
import Cart from "../../pages/Cart"

export const CART_ACTION_TYPE={
    ADD_TO_CART:'ADD_TO_CART',
    REMOVE_FROM_CART:'REMOVE_FROM_CART',
    INCREMENT_QUANTITY:'INCREMENT_QUANTITY',
    DECREMENT_QUANTITY:'DECREMENT_QUANTITY',
}
export const addToCartAction=(product)=>{
    return{
        type:CART_ACTION_TYPE.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCartAction=(productName)=>{
    return{
    type:CART_ACTION_TYPE.REMOVE_FROM_CART,
    payload:productName
}
}
export const incrementQuantityAction =(productName)=>{
    return{
        type:CART_ACTION_TYPE.INCREMENT_QUANTITY,
        payload:productName
    }
}
export const decementQuantityAction =(productName)=>{
    return{
        type:CART_ACTION_TYPE.DECREMENT_QUANTITY,
        payload:productName
    }
}