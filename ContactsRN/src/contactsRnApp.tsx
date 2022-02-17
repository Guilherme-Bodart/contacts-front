import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from './store'
import Moment from 'moment';
import HomeNavigation from './stacks/StackLogin';
import ContatoNavigation from './stacks/StackContatos'

const contactsRN = () => {
    Moment.locale('pt-br');
    const usuario = useSelector((store: Store) => store.usuarioReducer);
    return (
        <NavigationContainer>
            <View style={styles.container}>
                {usuario.logado ? <ContatoNavigation /> : <HomeNavigation />}
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F4"
    },
})


export default contactsRN