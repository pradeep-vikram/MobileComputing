import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type NavProps = NativeStackScreenProps<any>;
export default function Assignment4({navigation}: NavProps): JSX.Element {
  const [userDetails, setUserDetails] = useState<object>();
  return (
    <SafeAreaView className="h-full">
      {/* Headers */}
      <View className="flex flex-row h-[60px] bg-[#030303] pl-3 items-center">
        <MaterialIcons
          name="keyboard-backspace"
          color="white"
          size={40}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text className="ml-[20px] text-[20px] text-white">Assignment 3</Text>
      </View>
      {/* Body */}
      <View className="flex">
        <View className="flex flex-row">
          <Text className="flex text-black">First Name:</Text>
          <TextInput value={userDetails?.firstName} />
        </View>
      </View>
    </SafeAreaView>
  );
}
