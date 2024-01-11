import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../screens/drawer';
import Homescreen from '../screens/Homescreen';
import Entrytest from '../screens/Entrytest';
import Dashboard from '../screens/Dashboardscreen';
import Login from '../screens/Login';
import Addmcq from '../screens/Addmcq';
import Game from '../screens/game';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Homescreen}
      options={{ headerShown: false }} />
   

      <Stack.Screen name="Entry" component={Entrytest} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Addmcq" component={Addmcq} />
      <Stack.Screen name="Game" component={Game} />

    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      drawerContent={() => <DrawerContent />}
    >
      
      <Drawer.Screen name="Home" component={StackNavigator} 
      options={{ headerShown: false }}/>
      <Drawer.Screen name="Entry" component={Entrytest} />
    </Drawer.Navigator>
  );
}
