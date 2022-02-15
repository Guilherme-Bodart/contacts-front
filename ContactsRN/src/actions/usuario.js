import { LOGIN_USER, LOGOUT_USER } from './types'

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