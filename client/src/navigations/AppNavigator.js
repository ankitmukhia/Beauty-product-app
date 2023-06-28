/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
import SquareScreens from '../screens/SquareScreens';
import UserScreens from '../screens/UserScreens';
import {Platform, View} from 'react-native';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';

import {
  Squares2X2Icon as SquaresOutline,
  HomeIcon as HomeOutline,
  UserCircleIcon as UserOutline,
} from 'react-native-heroicons/outline';
import {
  UserCircleIcon as UserSolid,
  Squares2X2Icon as SquaresSolid,
  HomeIcon as HomeSolid,
} from 'react-native-heroicons/solid';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => MenuIcons(route, focused),
          tabBarStyle: {
            marginBottom: 20,
            height: 80,
            alignItems: 'center',
            borderRadius: 100,
            marginHorizontal: 20,
            backgroundColor: '#d4a574', // Your custom background color
          },
          tabBarItemStyle: {
            marginTop: Platform.OS === 'ios' ? 30 : 0,
          },
        })}>
        <Tab.Screen name="HomeScreens" component={HomeScreens} />
        <Tab.Screen name="SquareScreens" component={SquareScreens} />
        <Tab.Screen name="UserScreens" component={UserScreens} />
      </Tab.Navigator>
    </View>
  );
};

const MenuIcons = (route, focused) => {
  let icon;

  if (route.name === 'HomeScreens') {
    icon = focused ? (
      <HomeSolid size="30" color="#d4a574" />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'SquareScreens') {
    icon = focused ? (
      <SquaresSolid size="30" color="#d4a574" />
    ) : (
      <SquaresOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === 'UserScreens') {
    icon = focused ? (
      <UserSolid size="30" color="#d4a574" />
    ) : (
      <UserOutline size="30" strokeWidth={2} color="white" />
    );
  }

  return (
    <View
      style={{
        backgroundColor: focused ? 'white' : '',
      }}
      className={'flex items-center rounded-full p-3 shadow'}>
      {icon}
    </View>
  );
};

export default AppNavigator;
