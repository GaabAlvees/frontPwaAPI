import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlunosMenu = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Home');
    };
    const CadastrarAluno = () => {
        navigation.navigate('CadastrarAluno');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selecione uma opção:</Text>
            <TouchableOpacity style={styles.button} onPress={CadastrarAluno}>
                <Text style={styles.buttonText}>Cadastrar Aluno</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Alterar Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Informações do Aluno</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Deletar Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    heading: {
        marginTop:200,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
    },
    button: {
        backgroundColor: '#1E90FF',
        marginTop:20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AlunosMenu;
