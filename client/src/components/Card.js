/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Heart, EllipsisHorizontalCircle} from '@nandorojo/heroicons/24/outline';
import {Heart as FullHeart} from '@nandorojo/heroicons/20/solid';

import {useNavigation} from '@react-navigation/native';

const Card = ({title, description, imageUrl, item}) => {
  const [isFavorite, toggleFavorite] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('ProductDetails', {
          title,
          description,
          imageUrl,
          item,
        })
      }>
      <View className="m-4 bg-[#f9f7f5] rounded-3xl border border-black">
        <Image
          className="h-40 rounded-t-3xl"
          resizeMode="contain"
          source={{
            uri: imageUrl,
          }}
        />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2 text-black">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-xs text-gray-500">{description}</Text>
          </View>
          <View className="flex-row items-center space-x-1 mr-10">
            <TouchableOpacity className="bg-[#d6a775] p-2 px-5 rounded-full">
              <Text className="text-white">View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
              {isFavorite ? (
                <FullHeart size={20} color="red" width={30} height={50} />
              ) : (
                <Heart size={20} color="gray" width={30} height={50} />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <EllipsisHorizontalCircle
                size={20}
                color="gray"
                width={30}
                height={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
