import axios from 'axios';
import { CREATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_USER } from './types'

export const login = (usuario: any) => {
    return (dispatch: any) => {
        const { email, password } = usuario;
        const data = { usuario: {}, token: '' }
        axios.post("https://contacts-rn.herokuapp.com/auth/authenticate", {
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
        axios.post("https://contacts-rn.herokuapp.com/auth/register", {
            usuario
        }).then(async (response) => {
            let user = { usuario: response.data.usuario, token: response.data.token }
            await dispatch(armazenaInfoUsuario(user))
        }).catch((error) => {
            console.log('Error ao Criar conta');
        })
    }
}

export const atualizarUsuario = (usuario: any) => {
    return (dispatch: any, getState: any) => {
        let id = getState().usuarioReducer.usuario._id;
        let token = getState().usuarioReducer.token;
        let contatos = [];
        

        contatos.push(usuario)
        axios.put(`https://contacts-rn.herokuapp.com/user/${id}/contacts`, { contatos }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(async (response) => {
                let user = { usuario: response.data.usuario, token: token }
                await dispatch(armazenaInfoUsuario(user))

            }).catch((error) => {
                console.log('Erro ao Atualizar o contato');
            })
    }
}

export const getContatos = () => {
    return (dispatch: any, getState: any) => {
        let id = getState().usuarioReducer.usuario._id;
        let token = getState().usuarioReducer.token;
        axios.get(`https://contacts-rn.herokuapp.com/user/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(async (response) => {
            let user = { usuario: response.data.usuario, token: token }
            await dispatch(armazenaInfoUsuario(user))

        }).catch((error) => {
            console.log('Erro ao Atualizar o contato');
        })
    }
}
