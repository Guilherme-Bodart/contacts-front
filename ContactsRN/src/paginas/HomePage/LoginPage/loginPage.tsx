import React, { useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeBaseProvider, Box, Input, Button } from 'native-base';
import { login, logout } from '../../../actions/usuario';

const LoginPage = ({ navigation }: { navigation: any }, props: any) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    const dispatch = useDispatch();
    const loginUser = (usuario: any) => dispatch(login(usuario))
    const logoutUser = () => dispatch(logout())
    return (
        <NativeBaseProvider>
            <Box alignSelf="center" marginTop="10" _text={{
                fontSize: "lg",
                fontWeight: 'medium',
                color: '#70708b'
            }}>
                Contacts RN
            </Box>
            <View style={styles.containerLogo}>
                <Image source={require("../../../assets/Contacts.png")} style={styles.imgLogo} />
                <Input variant="underlined" placeholder="E-mail" value={email} width="300" onChangeText={onChangeEmail} />
                <Input variant="underlined" placeholder="Senha" value={password} width="300" onChangeText={onChangePassword} secureTextEntry />
                <Box mt="1/6" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => loginUser({email: email, password: password})}>Login</Button>
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => logoutUser()}>Logout</Button>
                </Box>
                <Button onPress={() => navigation.navigate('Email')} variant="link" colorScheme="info">Esqueceu a sua senha?</Button>
                <Box flexDirection="row" alignItems="center" _text={{ color: "#70708b" }}>Não tem uma conta?<Button onPress={() => navigation.navigate('Cadastro')} variant="link" colorScheme="info">Crie Agora</Button></Box>
            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    containerLogo: {
        flex: 1,
        alignItems: 'center',
    },
    imgLogo: {
        height: 100,
        width: 100,
        marginTop: 15,
        marginBottom: 20
    },
    txt: {
        fontSize: 200,
    },
    input: {
        height: 100,
        width: 200,
        backgroundColor: '#000'
    }
})



export default LoginPage