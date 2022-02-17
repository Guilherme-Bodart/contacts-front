import axios from 'axios';

import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from './types'

export const login = (usuario: any) => {
    return async (dispatch: any) => {
        const { email, password } = usuario;
        const data = { usuario: {}, token: '' }
        axios.post("http://10.0.2.2:3000/auth/authenticate", {
            email,
            password
        }).then(async (response) => {
            data.usuario = response.data.usuario;
            data.token = response.data.token;
            await dispatch(armazenaInfoUsuario(data))
        }).catch((error) => {
            console.log('ERROR', error);
        })
    }
}

export const armazenaInfoUsuario = (usuario: any) => {
    return {
        type: LOGIN_USER,
        data: usuario,
    }
}

export const logout = () => (
    {
        type: LOGOUT_USER,
    }
)

export const criarUsuario = (usuario: any) => {
    return async (dispatch: any) => {
        axios.post("http://10.0.2.2:3000/auth/register", {
            usuario
        }).then(async (response) => {
            let user = {usuario: response.data.usuario, token:response.data.token}
            await dispatch(armazenaInfoUsuario(user))
        }).catch((error) => {
            console.log('Error ao Criar conta');
        })
    }
}