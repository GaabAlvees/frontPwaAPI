import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MilesMenu = () => {
    const navigation = useNavigation();

    const handlePressAluno = () => {
        navigation.navigate('AlunosMenu');
    };

    const handlePressTurma = () => {
        navigation.navigate('TurmasMenu');
    };

    const handlePressMateria = () => {
        navigation.navigate('MateriasMenu');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selecione uma opção:</Text>
            <TouchableOpacity style={styles.button} onPress={handlePressAluno}>
                <Text style={styles.buttonText}>ALUNOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePressTurma}>
                <Text style={styles.buttonText}>TURMAS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePressMateria}>
                <Text style={styles.buttonText}>MATÉRIAS</Text>
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
        marginTop: 200,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000',
    },
    button: {
        backgroundColor: '#1E90FF',
        marginTop: 20,
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

export default MilesMenu;
