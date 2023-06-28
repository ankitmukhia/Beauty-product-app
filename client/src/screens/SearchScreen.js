/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {ChevronLeftIcon, ShareIcon} from 'react-native-heroicons/outline';

import {useSelector} from 'react-redux';
import {selectSearchedData} from '../redux/slice/Slice';
import {Response} from '../components/MakeUpRow';
const {width, height} = Dimensions.get('window');

const SearchScreen = ({navigation}) => {
  const searchedData = useSelector(selectSearchedData);
  console.log('searchedData', searchedData);

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
        </View>
      </View>
      <View className="mt-5">
        {searchedData?.data.length > 0 ? (
          searchedData.data.map(item => (
            <Response
              key={item._id}
              item={item}
              title={item.title}
              desc={item.description}
              products={item.products}
            />
          ))
        ) : (
          <View className="justify-center flex-1 bg-white items-center">
            <Image
              source={require('../assets/noData.jpg')}
              style={{width: height, height: width, resizeMode: 'contain'}}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
});
