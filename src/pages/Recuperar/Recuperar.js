import React from 'react';
import { View, Image, SafeAreaView, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';


import globalStyles from '../../GlobalStyles';
import styles from './Styles';

import logo from '../../assets/logo.png';

function Recuperar({navigation}) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <KeyboardAvoidingView behavior='padding' style={globalStyles.keyBoardAvoidContainer}>
            <Image source={logo} />
            <Text style={[globalStyles.primaryLabel, {marginTop: 10}]}>Esqueci minha senha</Text>
            <Text style={[globalStyles.secondLabel, styles.paragraph]}>Envie-nos o email cadastrado na sua conta e você receberá em breve, todas as informações necessárias para recuperar sua senha.</Text>

            <View style={styles.form}>
                <TextInput 
                style={globalStyles.input}
                placeholder='Email'
                keyboardType='email-address'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                />

                <TouchableOpacity style={globalStyles.primaryBtn} onPress={() => alert('TODO')}>
                  <Text style={globalStyles.primaryBtnText}>Entrar</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

export default Recuperar;