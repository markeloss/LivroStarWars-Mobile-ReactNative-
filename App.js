import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

import ListaLivros from './componentes/ListaLivros';
import ListaDetalhes from './componentes/ListaDetalhes';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='ListaLivros' component={ListaLivros} />
        <Stack.Screen options={{headerShown: false}} name='ListaDetalhes' component={ListaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}