import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Profile from "./src/Profile";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Goals from './src/Goals';
import MyBody from './src/MyBody';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="profile"
        >
          <Stack.Screen name="profile" component={Profile}  />
          <Stack.Screen name="Goal" component={Goals} />
          <Stack.Screen name="myBody" component={MyBody} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
  },
});
