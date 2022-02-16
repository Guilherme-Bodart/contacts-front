import axios from 'axios';
import { CREATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_CONTACT, UPDATE_USER } from '../actions/types'

const initialState = {
    logado: false,
    usuario: {},
    token: '',
}

const usuarioReducer = async (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            var usuario;
            var token;
            const { email, password } = action.data;
            await axios.post("http://10.0.2.2:3000/auth/authenticate", {
                email,
                password
            }).then(async (response) => {
                usuario = response.data.usuario;
                token = response.data.token;
            }).catch((error) => {
                console.log(error);
            })
            return {
                ...state,
                logado: true,
                usuario: usuario,
                token: token,
            }
        case LOGOUT_USER:
            return { initialState }

        case CREATE_USER:
            var  usuario  = action.data;
            await axios.post("http://10.0.2.2:3000/auth/register", {
                usuario
            }).then(async (response) => {
                console.log(response)
            }).catch((error) => {
                console.log('Error ao Criar conta');
            })
            return state
        default:
            return state
    }

}

export default usuarioReducer;