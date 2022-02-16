import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {
    View,
    StyleSheet
} from 'react-native';

import HomeNavigation from './stacks/StackNavigation';
import Moment from 'moment';

const contactsRN = () => { 
    Moment.locale('pt-br')
    return(
    <NavigationContainer>
        <View style={styles.container}>
            <HomeNavigation />
        </View>
    </NavigationContainer>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F4"
    },
})


export default contactsRN