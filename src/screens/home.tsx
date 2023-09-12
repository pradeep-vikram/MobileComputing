import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, View, Text} from 'react-native';

type NavProps = NativeStackScreenProps<any>;
export default function HomeScreen({navigation}: NavProps): JSX.Element {
  return (
    <SafeAreaView>
      <View className="flex items-center mt-3">
        <Text className="text-black text-[20px]">Mobile Computing</Text>
        <View className="mt-3 w-[80%] flex">
          <Button
            onPress={() => {
              navigation.navigate('Assignment3');
            }}
            title="Assignment 3"
          />
        </View>
        <View className="mt-3 w-[80%] flex">
          <Button
            onPress={() => {
              navigation.navigate('Assignment4');
            }}
            title="Assignment 4"
          />
        </View>
        <View className="mt-3 w-[80%] flex">
          <Button
            onPress={() => {
              navigation.navigate('Assignment5');
            }}
            title="Assignment 5"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
