import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type NavProps = NativeStackScreenProps<any>;
export default function Assignment3({navigation}: NavProps): JSX.Element {
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState<string>('');
  const [commentInputError, setCommentInputError] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const ratingComments: {[key: string]: string} = {
    '1': 'Disappointed. Very poor',
    '2': 'Not good. Need Improvement',
    '3': 'Satisfied',
    '4': 'Good. Enjoyed it',
    '5': 'Awesome. I love it',
  };
  return (
    <SafeAreaView className="h-full bg-white">
      {/* Header */}
      <View className="flex flex-row h-[60px] bg-[#df4c93] pl-3 items-center">
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
      <View className="h-full flex mt-[40px] mx-2">
        {/* <View>
          <Image source={require('../../assets/food.jpg')} />
        </View> */}
        <View className="flex items-center">
          <Text className="text-black text-[20px]">
            We hope you enjoyed your meal with us!
          </Text>
          <View className="flex flex-row mt-10">
            <MaterialIcons
              name={rating >= 1 ? 'star' : 'star-outline'}
              color={rating >= 1 ? '#df4c93' : 'black'}
              size={50}
              onPress={() => {
                setRating(1);
              }}
            />
            <MaterialIcons
              name={rating >= 2 ? 'star' : 'star-outline'}
              color={rating >= 2 ? '#df4c93' : 'black'}
              size={50}
              onPress={() => {
                setRating(2);
              }}
            />
            <MaterialIcons
              name={rating >= 3 ? 'star' : 'star-outline'}
              color={rating >= 3 ? '#df4c93' : 'black'}
              size={50}
              onPress={() => {
                setRating(3);
              }}
            />
            <MaterialIcons
              name={rating >= 4 ? 'star' : 'star-outline'}
              color={rating >= 4 ? '#df4c93' : 'black'}
              size={50}
              onPress={() => {
                setRating(4);
              }}
            />
            <MaterialIcons
              name={rating === 5 ? 'star' : 'star-outline'}
              color={rating === 5 ? '#df4c93' : 'black'}
              size={50}
              onPress={() => {
                setRating(5);
              }}
            />
          </View>
          <View className="flex mt-4">
            <Text className="text-black text-[18px]">
              {ratingComments[String(rating)]}
            </Text>
          </View>
        </View>
        <View className="flex items-center mt-5">
          <TextInput
            value={comments}
            placeholder="Feedback"
            className="w-[100%] border-b-2 border-[#df4c93] text-black"
            placeholderTextColor={'black'}
            onChangeText={value => {
              setComments(value);
              if (value.length > 100) {
                setCommentInputError('Maximum character limit reached (100)');
              } else {
                setCommentInputError('');
              }
            }}
          />
          {commentInputError.length > 0 && (
            <Text className="text-black flex self-start py-1">
              {commentInputError}
            </Text>
          )}
          <TouchableOpacity
            className="h-[50px] bg-[#df4c93] flex justify-center mt-2 w-[100%] items-center"
            disabled={comments.length === 0}
            onPress={() => {
              if (comments.length > 0) {
                setModalVisible(true);
              }
            }}>
            <Text
              className={`text-[17px] ${
                comments.length === 0 ? 'text-grey-100' : 'text-white'
              }`}>
              Send Feedback
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Modal */}
      <View>
        <Modal
          isVisible={modalVisible}
          backdropOpacity={0.7}
          animationInTiming={300}
          animationOutTiming={500}>
          <View className="flex h-full items-center justify-center">
            <View className="flex w-[80%] bg-white px-2">
              <View className="flex mt-2">
                <Text className="text-black flex">{comments}</Text>
              </View>
              <View>
                <TouchableOpacity
                  className="flex bg-[#df4c93] h-[30px] mt-2 mb-1 items-center justify-center"
                  onPress={() => {
                    setModalVisible(false);
                  }}>
                  <Text className="text-white">Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
