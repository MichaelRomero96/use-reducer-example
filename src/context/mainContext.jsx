// importamos el api para crear el contexto
// importamos hook useReducer para reducir funciones y consumir store y dispatch
// store = almacén de datos global
// dispatch = función para actualizar el estado global
import { createContext, useContext, useReducer } from "react";
import mainReducer, { initialStore } from "./mainReducer";

// declarar una constante para almacenar ese contexto
const MainContext = createContext();


// componente JSX para dotar el App del contexto
const MainProvider = ({ children }) =>
    <MainContext.Provider value={useReducer(mainReducer, initialStore)}>
        {children}
    </MainContext.Provider>

// const MainProvider = ({ children }) => {
//     const [store, dispatch] = useReducer(mainReducer, initialStore);
//     return (
//         <MainContext.Provider value={[store, dispatch]}>
//             {children}
//         </MainContext.Provider>
//     )
// };

//custom Hooks para gestionar el consumo y la actualización del Contexto
const useMainStore = () => useContext(MainContext)[0];
const useMainDispatch = () => useContext(MainContext)[1];

export default MainProvider;
export { MainContext, useMainStore, useMainDispatch };