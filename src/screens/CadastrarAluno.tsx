import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const CadastrarAluno = ({ navigation }) => {
    const [nomeAluno, setNomeAluno] = useState('');

    const handlePress = async () => {
        try {
            const response = await fetch('http://172.16.10.148:3000/aluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: nomeAluno }),
            });

            if (!response.ok) {
                throw new Error('Falha ao cadastrar aluno');
            }

            // Mostrar mensagem de sucesso
            alert('Aluno cadastrado com sucesso!');

            // Navegar para a tela AlunosMenu
            navigation.navigate('AlunosMenu');
        } catch (error) {
            console.error('Erro ao cadastrar aluno:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Insira o Nome do Aluno</Text>
            <TextInput
                style={styles.input}
                value={nomeAluno}
                onChangeText={setNomeAluno}
                placeholder="Nome do aluno"
                placeholderTextColor="#aaaaaa"
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Cadastrar Aluno</Text>
            </TouchableOpacity>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
    },
    input: {
        width: '80%',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
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

export default CadastrarAluno;
