import { StyleSheet, Text, View, TouchableOpacity, Image, Scrollview, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //navigate to login
    const goToLogin = () => {
        navigation.navigate('Login');
    }

    //handle registration from firebase
    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                goToLogin();
            }).catch((error) => {
                console.log(error);
            })
    }




    return (
        <SafeAreaView className="flex-1 justify-center items-center relative">
            <Text className="font-bold text-4xl m-10">Create Account</Text>
            <Text className="text-neutral-600">Email</Text>
            <TextInput
            onChangeText={(text)=>setEmail(text)}
            style={{ width: '70%' }} placeholder="Enter valid email" className="p-2 mb-3 mt-3 border border-sm border-orange-500 h-10 rounded-xl" />

            <Text className="text-neutral-600">Password</Text>
            <TextInput
            secureTextEntry
            onChangeText={(text)=>setPassword(text)}
            style={{ width: '70%' }} placeholder="Enter Passoword" className="p-2 mb-3 mt-3 border border-sm border-orange-500 h-10 rounded-xl" />

            <TouchableOpacity
            onPress={handleRegister}
            className="bg-orange-500 p-3 w-40 justify-center items-center rounded-xl">
                <Text className="text-lg font-semibold text-white">Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="font-semibold text-orange-500 p-3">Back to login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text className="font-semibold text-orange-500 p-3">Forgot Password?</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})