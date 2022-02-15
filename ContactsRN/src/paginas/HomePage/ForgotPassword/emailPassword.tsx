import React, { useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { NativeBaseProvider, Box, Input, Button } from 'native-base';


const EmailPage = ({navigation}: {navigation: any}) => {

    const [email, onChangeEmail] = useState('');

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
                <Input variant="outline" placeholder="E-mail" value={email} width="300" mb="3" borderRadius="8" onChangeText={onChangeEmail} secureTextEntry/>
                <Box _text={{color: '#70708b'}} mb="3">E-mail para a troca de senha!</Box>
                <Box mt="1/6" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => navigation.navigate('Forgot')}>Enviar Email</Button>
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

export default EmailPage