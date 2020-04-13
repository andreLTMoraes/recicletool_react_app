import React from 'react';
import { View, Image, SafeAreaView, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';



import styles from '../Styles';

import logo from '../assets/logo.png';

function Login({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor='#1ab394' />
        <KeyboardAvoidingView behavior='padding' style={styles.keyBoardAvoidContainer}>
            <Image source={logo} />
            <Text style={[styles.primaryLabel, {marginTop: 10}]}>Bem-vindo à Recicletool</Text>
            <Text style={styles.secondLabel}>Simplicidade e sustentabilidade</Text>

            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Usuário'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />

                <TouchableOpacity style={styles.primaryBtn} onPress={() => alert('TODO')}>
                  <Text style={styles.primaryBtnText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={[styles.secondLabel, {alignSelf: 'center', marginVertical: 10 }]} onPress={() => navigation.push('recuperar')}>Esqueceu sua senha?</Text>

                <TouchableOpacity style={styles.secondBtn} onPress={() => navigation.push('cadastrar')} >
                  <Text style={styles.secondBtnText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

export default Login;