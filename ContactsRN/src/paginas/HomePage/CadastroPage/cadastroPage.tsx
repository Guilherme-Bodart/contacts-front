import React, { useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { NativeBaseProvider, Box, Input, Button } from 'native-base';

const LoginPage = ({ navigation }: { navigation: any }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [nome, onChangeNome] = useState('');
    const [sobreNome, onChangeSobreNome] = useState('');
    const [dataNascimento, onChangeDataNascimento] = useState('');
    const [telefone, onChangeTelefone] = useState('');
    const [estado, onChangeEstado] = useState('');
    const [cidade, onChangeCidade] = useState('');
    const [bairro, onChangeBairro] = useState('');
    const [rua, onChangeRua] = useState('');
    const [numero, onChangeNumero] = useState('');
    const [complemento, onChangeComplemento] = useState('');

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
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="E-mail" value={email} width="150" onChangeText={onChangeEmail} mr="5"/>
                    <Input variant="underlined" placeholder="Senha" value={password} width="150" onChangeText={onChangePassword} secureTextEntry />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Nome" value={nome} width="150" onChangeText={onChangeNome} mr="5"/>
                    <Input variant="underlined" placeholder="Sobrenome" value={sobreNome} width="150" onChangeText={onChangeSobreNome} />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" type='date' placeholder="Date" value={dataNascimento} width="150" onChangeText={onChangeDataNascimento} mr="5"/>
                    <Input variant="underlined" placeholder="Telefone" value={telefone} width="150" onChangeText={onChangeTelefone} />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Estado" value={estado} width="100" onChangeText={onChangeEstado} mr="5"/>
                    <Input variant="underlined" placeholder="Cidade" value={cidade} width="100" onChangeText={onChangeCidade} mr="5"/>
                    <Input variant="underlined" placeholder="Bairro" value={bairro} width="100" onChangeText={onChangeBairro}/>
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Rua" value={rua} width="100" onChangeText={onChangeRua} mr="5"/>
                    <Input variant="underlined" placeholder="Complemento" value={complemento} width="100" onChangeText={onChangeComplemento} mr="5"/>
                    <Input variant="underlined" placeholder="Número" value={numero} width="100" onChangeText={onChangeNumero} />
                </Box>
                <Box mt="1/6" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => navigation.navigate('Login')}>Criar Conta</Button>
                </Box>
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