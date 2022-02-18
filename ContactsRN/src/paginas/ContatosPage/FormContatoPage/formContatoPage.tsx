import React, { useState, useEffect } from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { NativeBaseProvider, Box, Input, Button, IconButton } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from "moment"

import { atualizarUsuario } from '../../../actions/usuario';

const FormularioPage = (props: any) => {
    Moment.locale('pt-br')
    const dispatch = useDispatch();
    const updateUser = (usuario: any) => dispatch(atualizarUsuario(usuario))

    const navigation = useNavigation();
    const [id, onChangeId] = useState('');
    const [email, onChangeEmail] = useState('');
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

    const onChangeShow = () => {
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
            _id: id,
            email: email,
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
        updateUser(usuario);
    }

    const preencheContato = () => {
        if (props.route.params) {
            onChangeId(props.route.params._id);
            onChangeEmail(props.route.params.email);
            onChangeNome(props.route.params.nome);
            onChangeSobreNome(props.route.params.sobrenome);
            setDataNascimento(new Date(props.route.params.dataNascimento));
            setDate(Moment(props.route.params.dataNascimento).format('DD-MM-YYYY'));
            onChangeTelefone(props.route.params.telefone);
            onChangeEstado(props.route.params.estado);
            onChangeCidade(props.route.params.cidade);
            onChangeBairro(props.route.params.bairro);
            onChangeRua(props.route.params.rua);
            onChangeNumero(props.route.params.numero);
            onChangeComplemento(props.route.params.complemento);
        }
    }


    useEffect(() => {
        preencheContato()
        return function cleanup() {
          };
    },[])

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
                <Box flexDirection='row' mt={'3'}>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        E-mail
                        <Input width="340" marginRight={'0'} variant="underlined" placeholder="E-mail" value={email} height="8" onChangeText={onChangeEmail} mr="5" />
                    </Box>
                </Box>
                <Box flexDirection='row' mt={'3'}>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Nome
                        <Input variant="underlined" placeholder="Nome" value={nome} height="8" width="160" onChangeText={onChangeNome} mr="5" />
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Sobrenome
                        <Input variant="underlined" placeholder="Sobrenome" value={sobrenome} height="8" width="160" onChangeText={onChangeSobreNome} />
                    </Box>
                </Box>
                <Box flexDirection='row' mt={'3'}>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Data Nascimento
                        <Box flexDirection='row' alignItems='center' width="160" borderColor='coolGray.200' mr="5" borderBottomWidth='2'>
                            <IconButton icon={<Icon name='calendar' />} onPress={onChangeShow} />
                            <Box width='130'>{date}</Box>
                        </Box>
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Telefone
                        <Input variant="underlined" placeholder="Telefone" value={telefone} height="8" width="160" onChangeText={onChangeTelefone} />
                    </Box>
                </Box>
                <Box flexDirection='row' mt={'3'}>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Estado
                        <Input variant="underlined" placeholder="Estado" value={estado} height="8" width="100" onChangeText={onChangeEstado} mr="5" />
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Cidade
                        <Input variant="underlined" placeholder="Cidade" value={cidade} height="8" width="100" onChangeText={onChangeCidade} mr="5" />
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Bairro
                        <Input variant="underlined" placeholder="Bairro" value={bairro} height="8" width="100" onChangeText={onChangeBairro} />
                    </Box>
                </Box>
                <Box flexDirection='row' mt={'3'}>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Rua
                        <Input variant="underlined" placeholder="Rua" value={rua} height="8" width="100" onChangeText={onChangeRua} mr="5" />
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Complemento
                        <Input variant="underlined" placeholder="Complemento" value={complemento} height="8" width="100" onChangeText={onChangeComplemento} mr="5" />
                    </Box>
                    <Box _text={{ fontSize: "xs", color: 'coolGray.400' }}>
                        Numero
                        <Input variant="underlined" placeholder="Número" value={numero} height="8" width="100" onChangeText={onChangeNumero} />
                    </Box>
                </Box>
                <Box mt="8" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => {
                        setUser();navigation.navigate('Lista');
                    }}>{props.route.params ? 'Editar Contato' : 'Criar Contato'}</Button>
                    <Button mt="4" variant="solid" colorScheme="info" width="300" borderRadius="24"
                        onPress={() => {
                            navigation.navigate('Lista');
                        }}>Voltar</Button>
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

export default FormularioPage