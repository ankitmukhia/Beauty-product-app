/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  ChevronLeftIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import Benefits from '../components/Benefits';
import {benefits, review} from '../constants';
import Review from '../components/Review';

var {width, height} = Dimensions.get('window');

const ProductDetailsScreen = ({navigation}) => {
  const {
    params: {title, description},
  } = useRoute();

  const [data] = useState([1, 2, 3]);
  return (
    <ScrollView style={styles.Container}>
      <View className="flex-row justify-between px-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full p-4 bg-[#d4a574]">
          <ChevronLeftIcon size={25} strokeWidth={2} color="white" />
        </TouchableOpacity>
        <View className=" flex-row items-center">
          <TouchableOpacity className="rounded-full p-4 bg-[#d4a574]">
            <ShareIcon size={25} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center w-5" />
          <TouchableOpacity className="rounded-full p-4 bg-[#d4a574]">
            <HeartIcon size={25} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousel */}
      <View className="mt-5">
        <Carousel
          data={data}
          renderItem={({item}) => <MovieCard item={item} />}
          firstItem={1}
          loop={true}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={width}
          itemWidth={width * 0.63}
          slideStyle={{display: 'flex', alignItems: 'center'}}
        />
      </View>

      {/* item detail */}
      <View className="flex-row justify-between px-4 mt-5">
        <View>
          <Text className="text-sm font-bold text-[#7B7B7B]">{title}</Text>
          <Text className=" text-lg font-semibold text-black">
            {description}
          </Text>
        </View>
      </View>

      {/* buttons */}
      <View className="px-4 flex-row mt-5">
        <TouchableOpacity className="p-4 px-12 border border-black rounded-full">
          <Text className="text-black font-bold">discover</Text>
        </TouchableOpacity>
        <View className="flex-grow" />
        <TouchableOpacity className="bg-[#d8905c] p-4 px-12 rounded-full">
          <Text className="text-white font-bold">Add to Kit</Text>
        </TouchableOpacity>
      </View>

      {/* benefit's */}
      <View className="mt-5">
        <View className="px-4">
          <Text className="text-2xl text-black font-bold">Key Benefits</Text>
        </View>
        <View className="overflow-visible py-5">
          <View className="m-4 p-5 bg-[#d4a888] rounded-3xl">
            {benefits.map(item => {
              return (
                <Benefits
                  title={item.title}
                  image={item.image}
                  description={description}
                />
              );
            })}
            <View className="mt-5">
              <Text className="text-white">
                Product recommendations are based on your skin profile. To know
                more about my process, data privacy, and other things, read our
                terms &amp; conditions. To know why this specific product is a
                match, tap below.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* review */}
      <View>
        <View className="px-4 mb-5">
          <Text className="text-2xl text-black font-bold">Expert Reviews</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 5,
          }}
          className="overflow-visible py-2">
          {review?.map(item => {
            return (
              <Review
                key={item._id}
                mainImage={item.mainImage}
                subImage={item.pushImage}
                description={item.description}
                time={item.time}
              />
            );
          })}
        </ScrollView>
      </View>

      <View className="mt-2 mb-10">
        <View className="overflow-visible py-1">
          <View className="m-4 p-10 bg-[#d4a888] rounded-3xl">
            <View className="flex-row justify-evenly">
              <StarIcon size={40} strokeWidth={2} color="white" />
              <StarIcon size={40} strokeWidth={2} color="white" />
              <StarIcon size={40} strokeWidth={2} color="white" />
              <StarIcon size={40} strokeWidth={2} color="white" />
              <StarIcon size={40} strokeWidth={2} color="white" />
            </View>
            <View className="mt-5">
              <TouchableOpacity className="bg-[#e6cbaf] p-4 px-12 rounded-full items-center">
                <Text className="text-white font-bold">rate this product</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const MovieCard = ({item}) => {
  return (
    <View
      style={{
        borderRadius: 40,
        border: 2,
        borderColor: 'red',
        backgroundColor: 'white',
        height: Platform.OS === 'ios' ? height * 0.4 : height * 0.4,
        width: width * 0.6,
      }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1593939202577-6bf5b21cb507?ixlib=rb-',
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderWidth: 1,
          borderColor: 'black',
          resizeMode: 'contain',
        }}
        className="rounded-3xl"
      />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
