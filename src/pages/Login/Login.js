import React from 'react';
import { View, Image, SafeAreaView, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';



import globalStyles from '../../GlobalStyles';
import styles from './Styles';

import logo from '../../assets/logo.png';

function Login({navigation}) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor='#1ab394' />
        <KeyboardAvoidingView behavior='padding' style={globalStyles.keyBoardAvoidContainer}>
            <Image source={logo} />
            <Text style={[globalStyles.primaryLabel, {marginTop: 10}]}>Bem-vindo à Recicletool</Text>
            <Text style={globalStyles.secondLabel}>Simplicidade e sustentabilidade</Text>

            <View style={styles.form}>
                <TextInput 
                style={globalStyles.input}
                placeholder='Usuário'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Senha'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />

                <TouchableOpacity style={globalStyles.primaryBtn} onPress={() => alert('TODO')}>
                  <Text style={globalStyles.primaryBtnText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={[globalStyles.secondLabel, {alignSelf: 'center', marginVertical: 10 }]} onPress={() => navigation.push('recuperar')}>Esqueceu sua senha?</Text>

                <TouchableOpacity style={globalStyles.secondBtn} onPress={() => navigation.push('cadastrar')} >
                  <Text style={globalStyles.secondBtnText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

export default Login;