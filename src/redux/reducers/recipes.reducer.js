import { RECIPES_ACTION_TYPES } from '../actions/recipes.action';

const INITIAL_STATE = {
	wishlist: [],
	recipes: [],
};

const recipesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case RECIPES_ACTION_TYPES.GET_RECIPES: {
			return {
				...state,
				recipes: [...action.payload],
			};
		}
	
		case RECIPES_ACTION_TYPES.GET_WISH_LIST: {
			return {
				...state,
				wishlist: [...action.payload],
			};
		}
		case RECIPES_ACTION_TYPES.ADD_TO_WISH_LIST: {
			return {
				...state,
				wishlist: state.wishlist.concat(action.payload),
			};
		}
		case RECIPES_ACTION_TYPES.REMOVE_FROM_WISH_LIST: {
			const newWishList = [...state.wishlist].filter(
				(recipe) => recipe.id !== action.payload
			);
			return {
				...state,
				wishlist: newWishList,
			};
		}
		default:
			return state;
	}
};

export default recipesReducer;