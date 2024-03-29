import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MateriasMenu = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selecione uma opção:</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Cadastrar Disciplina</Text>
            </TouchableOpacity>   
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Relação de Disciplinas Cadastradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Adicionar Disciplina a Turma</Text>
            </TouchableOpacity>            
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Relação de Disciplinas da Turma</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Alterar Informações da Disciplina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Deletar Disciplina da Grade Curricular</Text>
            </TouchableOpacity>
        </View>
    );
};
//Na tela de Relação de disciplinas, criar a opção de excluir disciplina para que seja feito o delete somente da materia na turma e nao na matriz

        
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

export default MateriasMenu;
