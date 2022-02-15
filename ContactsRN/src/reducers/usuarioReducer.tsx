import axios from 'axios';
import { CREATE_USER, LOGIN_USER, LOGOUT_USER, UPDATE_CONTACT, UPDATE_USER } from '../actions/types'

const initialState = {
    login: false,
    usuario: {}
}

const usuarioReducer = async (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            var usuario;
            const { email, password } = action.data;
            console.log(email, password);
            
            await axios.post("https://contacts-rn.herokuapp.com/auth/authenticate", {
                email,
                password
            })
            .then(async (response) => {
                console.log(response);
                
                usuario = response.data;
            })
            .catch((error) => {
                console.log(error);
                
            })
            console.log(usuario);
            return {
                ...state,
                login: true,
                usuario: usuario,
            }
        case LOGOUT_USER:
            return { initialState }
        default:
            return state
    }

}

export default usuarioReducer;