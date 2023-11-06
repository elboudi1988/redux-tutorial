import { CART_ACTION_TYPE } from '../actions/menu.action';
import data from '../../data.json';

const INTIAL_STATE = {
	cart: [],
	cartTotal: 0,
	products: data.menu,
};
const getCartTotal = (newCart) => {
	return newCart.reduce((a, b) => a + b.price * b.quantity, 0);
};
const menuReducer = (state = INTIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPE.ADD_TO_CART: {
			let newCart = [...state.cart];
			const PRODUCT_INDEX = newCart.findIndex(
				(product) => product.name === payload.name
			);
			if (PRODUCT_INDEX <= -1) {
				newCart = newCart.concat({ ...payload, quantity: 1 });
			} else {
				newCart = newCart.map((product) => {
					if (product.name === payload.name) {
						return { ...product, quantity: product.quantity + 1 };
					} else {
						return product;
					}
				});
			}

			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}
		case CART_ACTION_TYPE.REMOVE_FROM_CART: {
		

			let newCart = [...state.cart];
			newCart = newCart.filter((product) => product.name !== payload);

			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}

		case CART_ACTION_TYPE.INCREMENT_QUANTITY: {
			const newCart = [...state.cart].map((product) => {
				if (product.name === payload) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return product;
			});
			let newCartTotal = newCart.reduce((a, b) => a + b.price * b.quantity, 0);
			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}
		case CART_ACTION_TYPE.DECREMENT_QUANTITY: {
			const newCart = [...state.cart].map((product) => {
				if (product.name === payload) {
					return { ...product, quantity: product.quantity - 1 };
				}
				return product;
			});
			return {
				...state,
				cart: newCart,
				cartTotal: getCartTotal(newCart),
			};
		}
		default:
			return state;
	}
};

export default menuReducer;