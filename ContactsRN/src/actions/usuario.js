import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from './types'

export const login = (usuario) => (
    {
        type: LOGIN_USER,
        data: usuario
    }
)

export const logout = () => (
    {
        type: LOGOUT_USER,
    }
)

export const criarUsuario = (usuario) => (
    {
        type: CREATE_USER,
        data: usuario
    }
)