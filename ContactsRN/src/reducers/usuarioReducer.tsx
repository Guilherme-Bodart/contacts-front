import { CREATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_CONTACT, UPDATE_USER } from '../actions/types'

type UserState = {
    logado: boolean,
    usuario: Object,
    token: string
}

const initialState: UserState = {
    logado: false,
    usuario: {},
    token: '',
}

const usuarioReducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            const { token, usuario } = action.data;
            return {
                ...state,
                logado: true,
                token,
                usuario
            }

        case LOGOUT_USER:
            return initialState

        case CREATE_USER:

            return state
        default:
            return state
    }
}

export default usuarioReducer;