/* eslint-disable prettier/prettier */
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

var {width, height} = Dimensions.get('window');

const Review = ({mainImage, subImage, time, description}) => {
  return (
    <View className="px-4">
      <View className="relative">
        <Image source={mainImage} width={width} height={height} />
        <View className="absolute bottom-0 left-0 p-4 bg-opacity-50">
          <Text className="text-white">{description}</Text>
        </View>
        <View className="absolute flex-row items-center top-0 left-0 m-4 z-10">
          <TouchableOpacity className="pr-2">
            <Image source={subImage} height={height} width={width} />
          </TouchableOpacity>
          <Text className="text-white">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Review;
