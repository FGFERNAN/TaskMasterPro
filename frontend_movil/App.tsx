import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/presentation/views/home/home';
import { CreateScreen } from './src/presentation/views/create/create';
import { ProfileInfoScreen } from './src/presentation/views/profile/info/profileInfo';
import Toast from 'react-native-toast-message';
import { ModifyScreen } from './src/presentation/views/modify/modify';
import { User } from './src/domain/entities/user';

export type RootStackParamList = {
  HomeScreen: undefined;
  CreateScreen: undefined;
  ProfileInfoScreen: {refresh?: boolean};
  ModifyScreen: {user: User}
};

const Stack = createNativeStackNavigator <RootStackParamList>
();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          headerShown: true,
          title: 'Crear Usuario'
        }}
        />
        <Stack.Screen 
          name="ProfileInfoScreen" 
          component={ProfileInfoScreen} 
        />
        <Stack.Screen
        name="ModifyScreen"
        component={ModifyScreen}
        options={{
          headerShown: true,
          title: 'Modificar Usuario'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast />
    </>
  );
};

export default App;