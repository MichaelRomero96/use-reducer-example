// objeto para guardar los tipos de acciones
export const types_2 = {
    DELETE_PRODUCT_ALL: 'DELETE_PRODUCT_ALL',
    CHANGE_PRODUCTS: 'CHANGE_PRODUCTS'
}

//almacén de datos
export const initialStore = {
    products: [
        { id: 1, product: 'Product #1' },
        { id: 2, product: 'Product #2' },
        { id: 3, product: 'Product #3' }
    ]
};

// función reductora para evaluar las acciones
const productReducer = (state, action) => {
    switch (action.type) {
        case types_2.DELETE_PRODUCT_ALL:
            return {
                ...state,
                products: []
            }
        case types_2.CHANGE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
};

export default productReducer;