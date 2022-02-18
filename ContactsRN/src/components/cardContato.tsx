import React from 'react'
import Moment from 'moment'
import { useNavigation } from '@react-navigation/core';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NativeBaseProvider, Box, Pressable, Button, IconButton } from 'native-base';

const CardContato = (props: any) => {
    Moment.locale('pt-br');
    const navigation = useNavigation();
    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return (
        <NativeBaseProvider>
            <Box padding="2" backgroundColor="#f1f1f4" color="">
                <Pressable onPress={() => navigation.navigate('Formulario', props.contato)}>
                    <Box style={styles.boxContato}>
                        <Box style={styles.boxNome}>
                            <Box style={styles.circleIcon} backgroundColor={randomColor} >
                                {props.contato.nome.slice(0, 1)}
                            </Box>
                            <Box display="flex" alignItems="flex-start" flexDirection="column">
                                <Text style={styles.nomeContato}>{props.contato.nome + ' ' + props.contato.sobrenome}</Text>
                                <Text style={styles.nomeContato}>{props.contato.telefone}</Text>
                            </Box>
                        </Box>
                        <IconButton icon={<Icon name='pencil' color="#000" size={20} />}
                            onPress={() => navigation.navigate('Formulario', props.contato)} />
                    </Box>
                </Pressable>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContato: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        shadow: '3',
        padding: 8,
    },
    boxNome: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    circleIcon: {
        width: 36,
        height: 36,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
    },
    nomeContato: {
        fontSize: 15,
        color: "#000",
        fontWeight: '700',
        width: 300,
        paddingHorizontal: 20,
    }
})


export default CardContato