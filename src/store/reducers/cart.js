export default function cartReducer(state = [], action){

    if(action.type === 'ADD_PRODUCTS_TO_CART'){
        return [...state, action.payload];
    }

    return state;
}