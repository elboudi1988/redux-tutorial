import { CART_ACTION_TYPE } from "../actions/cartActions";
import products from '../../data.json'

const INTIAL_STATE ={
    cart:[],
    cartTotal: 0,
    products,

}
const rootReducer=(state=INTIAL_STATE,action)=>{
    const {type,payload}=action;
    switch (type) {
        case CART_ACTION_TYPE.ADD_TO_CART:{
            let newCart=[...state.cart]
        const PRODUCT_INDEX=newCart.findIndex(product=>product.name===payload.name);
        if (PRODUCT_INDEX<= -1) {
            newCart=newCart.concat({...payload ,quantity :1})
            
        }
        else{
            newCart=newCart.map(product=>{
                if (product.name===payload.name) {
                    return{...product,quantity:product.quantity+1}
                }
                return product;
            })
        }
        return{
            ...state,
            cart:newCart,
            cartTotal:state.cartTotal+payload.price
        
        };}

        case CART_ACTION_TYPE.REMOVE_FROM_CART:{
            //paypoad ===productName(unique key for productes)
            //search and delete the product with name ===payload(productName)
            //cartTotal should reflect this
            let newCart=[...state.cart];
            newCart= newCart.filter(product =>product.name !==payload)

            let newCartTotal = newCart.reduce((a,b) => a+ b.price * b.quantity,0)
            return{
                ...state,
                cart:newCart,
                cartTotal : newCartTotal
            }
        }
        case CART_ACTION_TYPE.INCREMENT_QUANTITY:{
            const newCart=[...state.cart].map(product=>{
                if (product.name===payload) {
                    return{...product,quantity:product.quantity +1}
                }
                return product;
            })
            let newCartTotal=newCart.reduce((a,b)=> a+b.price*b.quantity,0)

                return{
                    ...state,
                    cart:newCart,
                    cartTotal:newCartTotal
                }
            
            return{
                ...state

            }
        }
        case CART_ACTION_TYPE.DECREMENT_QUANTITY:{
            return{
                state
            }
        }
        
    
    
        default:
            return state
        
    
    
   
        }
};
export default rootReducer