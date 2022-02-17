import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaContatoPage from '../paginas/ContatosPage/ListaContatosPage/listaContatosPage'
import FormContatoPage from '../paginas/ContatosPage/FormContatoPage/formContatoPage'

const ContatoStackNavigator = createNativeStackNavigator();

function ContatoNavigation() {
    return (
        <ContatoStackNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <ContatoStackNavigator.Screen name="Lista" component={ListaContatoPage} />
            <ContatoStackNavigator.Screen name="Formulario" component={FormContatoPage} />
        </ContatoStackNavigator.Navigator>
    )
}

export default ContatoNavigation;