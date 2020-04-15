import React from 'react';
import { View, SafeAreaView, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from '../Styles';

function Cadastro() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrowViewContainer}>
          <KeyboardAvoidingView behavior='padding' style={styles.keyBoardAvoidcontainer}>
            <Text style={[styles.primaryLabel, styles.sectionFormLabel]}>Criar conta na Recicletool</Text>
            <Text style={[styles.secondLabel, styles.sectionFormLabel]}>Simplicidade e sustentabilidade</Text>

            <View style={styles.from}>
                <TextInput 
                style={styles.input}
                placeholder='Usuário*'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='Email*'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='Senha*'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='Confirmar senha*'
                placeholderTextColor='#999'
                secureTextEntry={true}
                autoCorrect={false}
                />

                <Text style={[styles.secondLabel, styles.sectionFormLabel]}>Informações adicionais</Text>

                <TextInput 
                style={styles.input}
                placeholder='Nome Completo'
                placeholderTextColor='#999'
                autoCapitalize='words'
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='CPF (Somente números)'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />

                {/* Select gênero */}

                <Text style={[styles.secondLabel, styles.sectionFormLabel]}>Data de nascimento*</Text>

                {/* DatePicker */}

                <Text style={[styles.secondLabel, styles.sectionFormLabel]}>Endereço</Text>

                <TextInput 
                style={styles.input}
                placeholder='Rua'
                placeholderTextColor='#999'
                autoCapitalize='words'
                />
                <TextInput 
                style={styles.input}
                placeholder='Número'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />
                <TextInput 
                style={styles.input}
                placeholder='Complemento (Apto, etc.)'
                placeholderTextColor='#999'
                autoCorrect={false}
                />

                {/* Select estado */}

                <TextInput 
                style={styles.input}
                placeholder='Cidade'
                placeholderTextColor='#999'
                autoCapitalize='words'
                />
                <TextInput 
                style={styles.input}
                placeholder='CEP'
                placeholderTextColor='#999'
                keyboardType='numeric'
                autoCorrect={false}
                />
                {/* Aviso pra preencher os campos */
                /* Pickeer de Aceito os termos */ } 
                <TouchableOpacity style={styles.primaryBtn} onPress={() => alert('TODO')}>
                    <Text style={styles.primaryBtnText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }

export default Cadastro;