import { StyleSheet, Text, View, TouchableOpacity, Image, Scrollview, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';




const LoginScreen = ({ navigation }) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const goToHome = ()=>{
        navigation.navigate('Home');
    }


    //login
    const Login = () => {
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user);
                goToHome();
                
            }).catch((error) => {
                console.log(error);
                Alert.alert('Incorrect email or password')
            })
    }

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Text className="font-bold text-4xl m-10">Login</Text>
            <Text className="text-neutral-600">Email</Text>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                style={{ width: '70%' }} placeholder="Enter email" className="p-2 mb-3 mt-3 border border-sm border-orange-500 h-10 rounded-xl" />

            <Text className="text-neutral-600">Password</Text>
            <TextInput
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={{ width: '70%' }} placeholder="Enter Passoword" className="p-2 mb-3 mt-3 border border-sm border-orange-500 h-10 rounded-xl" />

            <TouchableOpacity
                onPress={Login}
                style={{ backgroundColor: themeColors.bgColor(1) }}
                className="p-3 w-40 justify-center items-center rounded-xl">
                <Text className="text-lg font-semibold text-white">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                <Text className="font-semibold text-orange-500 p-3">Create Account</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})