/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Card from './Card';
import {fetchData} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {selectData} from '../redux/slice/Slice';

const MakeUpRow = () => {
  const dispatch = useDispatch();
  const response = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData({endpoint :'makeup'}));
  }, [dispatch]);

  return (
    <>
      {response?.data.map((item) => {
        return (
          <Response
            key={item._id}
            item={item}
            title={item.title}
            desc={item.description}
            products={item.products}
          />
        );
      })}
    </>
  );
};

export const Response = ({title, desc, products}) => {
  return (
    <>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{desc}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 5,
        }}
        className="overflow-visible py-5">
        {products?.map(item => {
          return (
            <Card
              key={item._id}
              id={item._id}
              item={item}
              title={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default MakeUpRow;
