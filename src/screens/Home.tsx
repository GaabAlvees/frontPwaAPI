import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('MilesMenu');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bem-vindo!</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Acessar Milestone</Text>
            </TouchableOpacity>
        </View>
    );
};

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
        marginBottom: 50,
        color: '#000000',
    },
    button: {
        backgroundColor: '#1E90FF',
        marginTop: 25,
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

export default Home;
