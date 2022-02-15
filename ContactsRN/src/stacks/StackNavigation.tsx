import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../paginas/HomePage/LoginPage/loginPage'
import CadastroPage from '../paginas/HomePage/CadastroPage/cadastroPage'
import ForgotPage from '../paginas/HomePage/ForgotPassword/forgotPassword';
import EmailPage from '../paginas/HomePage/ForgotPassword/emailPassword';

const HomeStackNavigator = createNativeStackNavigator();

function HomeNavigation() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <HomeStackNavigator.Screen name="Login" component={LoginPage} />
            <HomeStackNavigator.Screen name="Cadastro" component={CadastroPage} />
            <HomeStackNavigator.Screen name="Email" component={EmailPage} />
            <HomeStackNavigator.Screen name="Forgot" component={ForgotPage} />
        </HomeStackNavigator.Navigator>
    )
}

export default HomeNavigation;