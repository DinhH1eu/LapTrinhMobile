import React, {Component} from 'react';
// import 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
import Login from './login';
import Register from './register';
import Home from './home';
import Work from './work';
import Notification from './notification';
import Account from './account';
import Details from './details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();
function MyTabs(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home}
      />

      <Tab.Screen name="Hoạt động" component={Work} />
      <Tab.Screen name="Thông báo" component={Notification} />
      <Tab.Screen name="Tài khoản" component={Account} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();
export default RootComponent = function () {
  return (
    // <Home />
    // <Login />
    //  <Register />
    // <Work />
    // <Notification />
    // <Details />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
