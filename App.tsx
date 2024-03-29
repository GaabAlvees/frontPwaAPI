import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import MilesMenu from './src/screens/MilesMenu';
import AlunosMenu from './src/screens/AlunosMenu';
import TurmasMenu from './src/screens/TurmasMenu';
import MateriasMenu from './src/screens/MateriasMenu';
import CadastrarAluno from './src/screens/CadastrarAluno';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="MilesMenu" component={MilesMenu} />
                <Stack.Screen name="AlunosMenu" component={AlunosMenu} />
                <Stack.Screen name="TurmasMenu" component={TurmasMenu} />
                <Stack.Screen name="MateriasMenu" component={MateriasMenu} />
                <Stack.Screen name="CadastrarAluno" component={CadastrarAluno} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
