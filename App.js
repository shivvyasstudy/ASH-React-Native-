import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions ={
    headerStyle:{backgroundColor: "#FCFDF2" },
    headerTitleStyle: {color: "#222222"},
    headerTintColor: {color: "#222222"},

    
}


export default function App() {
  return (
       <NavigationContainer>
            <Stack.Navigator screenOptions = {globalScreenOptions}>
            <Stack.Screen name = "Login" component = {LoginScreen}/>
            <Stack.Screen name = "Register" component = {RegisterScreen}/>
             <Stack.Screen name = "Home" component = {HomeScreen}/> 


          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFDF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
