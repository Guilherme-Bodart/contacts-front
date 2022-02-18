import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../../store'

import { NativeBaseProvider, Box, Input, Button, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from "moment"
import { logout, getContatos } from '../../../actions/usuario'
import CardContato from '../../../components/cardContato'

const ListaContatoPage = () => {
    Moment.locale('pt-br')
    const dispatch = useDispatch();
    const logoutUser = () => dispatch(logout())
    const atualizaContatos = () => dispatch(getContatos())
    const navigation = useNavigation();
    const usuarioLogado = useSelector((store: Store) => store.usuarioReducer)
    usuarioLogado.usuario.contatos.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });



    useEffect(() => {
        atualizaContatos();
    }, [navigation])

    return (
        <NativeBaseProvider>
            <Box style={styles.boxContainer}>
                <Box style={styles.boxTitle}>
                    <Text style={styles.title}>Lista de contatos</Text>
                    <Button variant="unstyled" colorScheme='trueGray' rightIcon={<Icon name="arrow-right" color="#eef2ff" style={{ fontSize: 15 }} />} onPress={() => logoutUser()}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#eef2ff' }}>Sair</Text>
                    </Button>
                </Box>
                <FlatList
                    data={usuarioLogado.usuario.contatos}
                    renderItem={({ item }) =>
                        <Box>
                            <CardContato contato={item} />
                        </Box>
                    }
                />
                <Button style={styles.buttonAdd} variant="unstyled" colorScheme='trueGray'
                    rightIcon={<Icon name="plus" color="#eef2ff" style={{ fontSize: 15 }} />}
                    onPress={() => navigation.navigate('Formulario')}>
                </Button>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: '#404042',
        height: '100%'
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
    },
    boxTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#404042',
        alignItems: 'center',
        padding: 10
    },
    title: {
        color: "#eef2ff",
        fontSize: 20,
        marginLeft: 20,
    },
    buttonAdd: {
        width: 50,
        height: 50,
        position: "absolute",
        right: 20,
        bottom: 20,
        backgroundColor: "#a5b4fc",
        borderRadius: 15,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
})

export default ListaContatoPage