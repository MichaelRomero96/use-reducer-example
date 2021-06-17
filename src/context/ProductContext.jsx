// importamos el api para crear el contexto
// importamos hook useReducer para reducir funciones y almacenar store y dispatch
// store = almacén de datos global
// dispatch = función para actualizar el estado global
import { createContext, useContext, useReducer } from "react";
import productReducer, { initialStore } from "./productReducer";

// declarar una constante para almacenar ese contexto
const ProductContext = createContext();

// componente JSX para dotar el App del contexto
const ProductProvider = ({ children }) =>
    <ProductContext.Provider value={useReducer(productReducer, initialStore)}>
        {children}
    </ProductContext.Provider>

//custom Hooks para gestionar el consumo y la actualización del Contexto
const useProductStore = () => useContext(ProductContext)[0];
const useProductDispatch = () => useContext(ProductContext)[1];

export default ProductProvider;
export { ProductContext, useProductStore, useProductDispatch };