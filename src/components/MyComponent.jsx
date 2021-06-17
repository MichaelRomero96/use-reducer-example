import { useMainDispatch, useMainStore } from "../context/mainContext"
import { types } from "../context/mainReducer";
import { useProductDispatch, useProductStore } from "../context/ProductContext";
import { types_2 } from "../context/productReducer";

function MyComponent() {
    // const [store, dispatch] = useContext(MainContext);
    // const [productStore, productDispatch] = useContext(ProductContext);
    // const { user } = store;
    // const { products } = productStore;
    const mainDispatch = useMainDispatch();
    const { user } = useMainStore();
    const productDispatch = useProductDispatch();
    const { products } = useProductStore();

    console.log(user)

    return (
        <div>
            <h1>User: {user?.name}</h1>
            <button
                onClick={() => mainDispatch({
                    type: types.LOGOUT_ACTION
                })}
            >
                Logout
            </button>
            <button
                onClick={() => mainDispatch({
                    type: types.LOGIN_ACTION,
                    payload: { name: 'Jorge', id: 2 }
                })}
            >
                Login
            </button>
            {products.map(i => (
                <li key={i.id}>
                    {i.product}
                </li>
            ))
            }
            <button
                onClick={() => productDispatch({
                    type: types_2.DELETE_PRODUCT_ALL
                })}
            >Delete All Products</button>
            <button
                onClick={() => productDispatch({
                    type: types_2.CHANGE_PRODUCTS,
                    payload: [{ id: 4, product: 'Product # 4' }]

                })}
            >Change Products</button>
        </div >
    )
}

export default MyComponent
