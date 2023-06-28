/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

const UserScreens = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View className="justify-center flex-1 bg-white items-center">
      <Image
        source={require('../assets/sorry.jpg')}
        style={{width: height, height: width, resizeMode: 'contain'}}
      />
    </View>
  );
};
export default UserScreens;
