/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Image, Dimensions} from 'react-native';
import React from 'react';

const SquareScreens = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View className="justify-center flex-1 bg-white items-center">
      <Image
        source={require('../assets/404page.jpg')}
        style={{width: height, height: width, resizeMode: 'contain'}}
      />
    </View>
  );
};
export default SquareScreens;
