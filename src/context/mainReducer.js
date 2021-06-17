// objeto para guardar los tipos de acciones
export const types = {
    LOGOUT_ACTION: 'LOGOUT_ACTION',
    LOGIN_ACTION: 'LOGIN_ACTION'
};
//almacén de datos
export const initialStore = {
    user: {
        name: 'Carlos',
        id: 1
    }
};
// función reductora para evaluar las acciones
const mainReducer = (state, action) => {
    switch (action.type) {
        case types.LOGOUT_ACTION:
            return {
                ...state,
                user: null
            }
        case types.LOGIN_ACTION:
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
};
export default mainReducer;