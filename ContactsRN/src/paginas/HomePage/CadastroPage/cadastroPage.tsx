import React, { useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { NativeBaseProvider, Box, Input, Button, IconButton } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from "moment"

import { criarUsuario } from '../../../actions/usuario';

const CadastroPage = ({ navigation }: { navigation: any }) => {
    Moment.locale('pt-br')
    const dispatch = useDispatch();
    const createUser = (usuario: any) => dispatch(criarUsuario(usuario))

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [nome, onChangeNome] = useState('');
    const [sobrenome, onChangeSobreNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState(new Date());
    const [telefone, onChangeTelefone] = useState('');
    const [estado, onChangeEstado] = useState('');
    const [cidade, onChangeCidade] = useState('');
    const [bairro, onChangeBairro] = useState('');
    const [rua, onChangeRua] = useState('');
    const [numero, onChangeNumero] = useState('');
    const [complemento, onChangeComplemento] = useState('');
    const [show, setShow] = useState(false);
    const [date, setDate] = useState('dd-mm-yyyy')

    const onChangeShow = () =>{
        setShow(true);
        setDate(Moment(dataNascimento).format('DD-MM-YYYY'))
    }

    const onChangeDate = (event: any, selectDate: any) => {
        const currentDate = selectDate || dataNascimento;
        setDataNascimento(currentDate);
        setDate(Moment(currentDate).format('DD-MM-YYYY'));
        setShow(false);
    }

    function setUser() {
        const usuario = {
            email: email,
            password: password,
            nome: nome,
            sobrenome: sobrenome,
            dataNascimento: dataNascimento,
            telefone: telefone,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            complemento: complemento
        }
        createUser(usuario);
    }


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
                <Box>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dataNascimento}
                            mode={'date'}
                            display="spinner"
                            onChange={onChangeDate}
                            onTouchEnd={onChangeShow}
                        />
                    )}
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="E-mail" value={email} width="200" onChangeText={onChangeEmail} mr="5" />
                    <Input variant="underlined" placeholder="Senha" value={password} width="100" onChangeText={onChangePassword} secureTextEntry />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Nome" value={nome} width="150" onChangeText={onChangeNome} mr="5" />
                    <Input variant="underlined" placeholder="Sobrenome" value={sobrenome} width="150" onChangeText={onChangeSobreNome} />
                </Box>
                <Box flexDirection='row'>
                    <Box flexDirection='row' alignItems='center' width="150" borderColor='coolGray.200' mr="5" borderBottomWidth='2'>
                        <IconButton icon={<Icon name='calendar'/>} onPress={onChangeShow} />
                        <Box width='130'>{date}</Box>
                    </Box>
                    <Input variant="underlined" placeholder="Telefone" value={telefone} width="150" onChangeText={onChangeTelefone} />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Estado" value={estado} width="100" onChangeText={onChangeEstado} mr="5" />
                    <Input variant="underlined" placeholder="Cidade" value={cidade} width="100" onChangeText={onChangeCidade} mr="5" />
                    <Input variant="underlined" placeholder="Bairro" value={bairro} width="100" onChangeText={onChangeBairro} />
                </Box>
                <Box flexDirection='row'>
                    <Input variant="underlined" placeholder="Rua" value={rua} width="100" onChangeText={onChangeRua} mr="5" />
                    <Input variant="underlined" placeholder="Complemento" value={complemento} width="100" onChangeText={onChangeComplemento} mr="5" />
                    <Input variant="underlined" placeholder="Número" value={numero} width="100" onChangeText={onChangeNumero} />
                </Box>
                <Box mt="1/6" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => {
                        setUser();
                    }}>Criar Conta</Button>
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

export default CadastroPage