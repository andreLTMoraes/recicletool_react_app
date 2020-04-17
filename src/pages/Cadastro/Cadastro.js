import React from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';

import globalStyles from '../../GlobalStyles';
import styles from './Styles';

function Cadastro() {
    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView style={styles.scrowViewContainer}>
          <KeyboardAvoidingView behavior='padding' style={globalStyles.keyBoardAvoidcontainer}>
            <Text style={[globalStyles.primaryLabel, styles.sectionFormLabel]}>Criar conta na Recicletool</Text>
            <Text style={[globalStyles.secondLabel, styles.sectionFormLabel]}>Simplicidade e sustentabilidade</Text>

            <View style={styles.form}>
                <TextInput 
                style={globalStyles.input}
                placeholder='Usuário*'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Email*'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Senha*'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Confirmar senha*'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />

                <Text style={[globalStyles.secondLabel, styles.sectionFormLabel]}>Informações adicionais</Text>

                <TextInput 
                style={globalStyles.input}
                placeholder='Nome Completo'
                placeholderTextColor='#999'
                autoCapitalize='words'
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='CPF (Somente números)'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />

                {/* Select gênero */}

                <Text style={[globalStyles.secondLabel, styles.sectionFormLabel]}>Data de nascimento*</Text>

                {/* DatePicker */}

                <Text style={[globalStyles.secondLabel, styles.sectionFormLabel]}>Endereço</Text>

                <TextInput 
                style={globalStyles.input}
                placeholder='Rua'
                placeholderTextColor='#999'
                autoCapitalize='words'
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Número'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='Complemento (Apto, etc.)'
                placeholderTextColor='#999'
                autoCorrect={false}
                />

                {/* Select estado */}

                <TextInput 
                style={globalStyles.input}
                placeholder='Cidade'
                placeholderTextColor='#999'
                autoCapitalize='words'
                />
                <TextInput 
                style={globalStyles.input}
                placeholder='CEP'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />
                {/* Aviso pra preencher os campos */
                /* Pickeer de Aceito os termos */ } 
                <TouchableOpacity style={globalStyles.primaryBtn} onPress={() => alert('TODO')}>
                    <Text style={globalStyles.primaryBtnText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }

export default Cadastro;