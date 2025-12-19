export function addProductsToCart(products) {
    return {
        type: 'ADD_PRODUCTS_TO_CART',
        payload: products
    }
}