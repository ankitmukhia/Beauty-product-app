/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';

const Benefits = ({image, title, description}) => {
  return (
    <View>
      <View className="flex-row mt-5">
        <View className="bg-white rounded-full p-2">
          <Image
            source={image}
            style={{width: 30, height: 30, resizeMode: 'cover'}}
          />
        </View>
        <View className="ml-5">
          <Text className="font-semibold text-[20px] text-white">{title}</Text>
          <Text className="text-yellow-50">{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Benefits;
