import { CREATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '../actions/types'

interface Contato {
    id: string,
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    telefone: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: string,
    complemento: string,
}

interface Usuario {
    id: string,
    email: string,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    telefone: string,
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: string,
    complemento: string,
    contatos: Array<Contato>;
}


type UserState = {
    logado: boolean,
    usuario: Usuario,
    token: string
}

const initialState: UserState = {
    logado: false,
    usuario: {} as Usuario,
    token: '',
}

const usuarioReducer = (state: UserState = initialState, action: any) => {
    let token;
    let usuario: Usuario;

    switch (action.type) {
        case LOGIN_USER:
            token = action.data.token;
            usuario = action.data.usuario;
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