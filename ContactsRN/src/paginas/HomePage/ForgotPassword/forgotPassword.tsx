import React, { useState } from 'react'
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { NativeBaseProvider, Box, Input, Button } from 'native-base';


const ForgotPage = ({navigation}: {navigation: any}) => {

    const [newPassword, onChangeNewPassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

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
                <Input variant="outline" placeholder="Nova Senha" value={newPassword} width="300" mb="3" borderRadius="8" onChangeText={onChangeNewPassword} secureTextEntry/>
                <Input variant="outline" placeholder="Confirme a nova senha" value={confirmPassword} width="300" mt="3" borderRadius="8" onChangeText={onChangeConfirmPassword} secureTextEntry />
                <Box mt="10" mb="1/6">
                    <Button variant="solid" colorScheme="teal" width="300" borderRadius="24" onPress={() => navigation.navigate('Login')}>Trocar Senha</Button>
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

export default ForgotPage