/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {Bars3Icon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {categories} from '../constants/index';
import React, {useState} from 'react';
import MakeUpRow from '../components/MakeUpRow';
import SkinCareRow from '../components/SkinCareRow';
import {useDispatch} from 'react-redux';
import {searchProducts} from '../api';
import {useNavigation} from '@react-navigation/native';

const HomeScreens = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeComponent, setActiveComponent] = useState(<MakeUpRow />);

  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = item => {
    setActiveCategory(item.id);

    if (item.title === 'SkinCare') {
      setActiveComponent(<SkinCareRow />);
    } else if (item.title === 'MakeUp') {
      setActiveComponent(<MakeUpRow />);
    }
  };

  const handleSearchPress = () => {
    if (searchQuery) {
      dispatch(searchProducts(searchQuery));
      navigation.navigate('SearchScreen');
      setSearchQuery('');
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="flex-1" style={styles.Container}>
        <View className="px-4 flex-row justify-between">
          <View>
            <Text className="text-xl font-bold text-black">
              Hi, Ashwariya !
            </Text>
            <Text className="text-2xl font-bold text-black">
              Beauty starts with you
            </Text>
          </View>

          <TouchableOpacity>
            <Bars3Icon size={40} strokeWidth={2} color="black" />
          </TouchableOpacity>
        </View>

        {/* search bar */}
        <View className="mx-5 mt-8">
          <View className="flex-row items-center justify-center rounded-full p-1 bg-[#EEEEEE]">
            <TextInput
              placeholder="Search"
              placeholderTextColor="gray"
              value={searchQuery}
              onChangeText={value => setSearchQuery(value)}
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              onPress={handleSearchPress}
              className="rounded-full p-4 bg-[#d4a574]">
              <MagnifyingGlassIcon size={25} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            className="overflow-visible"
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              let isActive = item.id === activeCategory;
              let activeText = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => handleClick(item)}
                  style={{
                    backgroundColor: isActive ? '#d4a574' : 'rgba(0,0,0,0.07)',
                  }}
                  className="p-4 px-10 mr-2 rounded-full shadow">
                  <Text className={activeText}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* categories active components */}
        <View className="mt-5">{activeComponent}</View>

        <View className="m-5 p-5 bg-[#d4a574] rounded-3xl shadow-2xl">
          <View className="px-3 pb-4 space-y-2">
            <Text className="text-lg font-bold pt-2">
              Say goodbye to guesswork
            </Text>

            <Text className="text-xs">
              Want even more Smudgtastic matches? Tap the button below to
              discover!
            </Text>

            <View className="flex-row space-x-28 items-center">
              <TouchableOpacity className="bg-[#e6cbaf] p-2 px-5 mt-10 rounded-full">
                <Text className="text-white">discover</Text>
              </TouchableOpacity>
              <Image
                source={require('../assets/star.png')}
                width="25"
                height="25"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HomeScreens;

const styles = StyleSheet.create({
  Container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
