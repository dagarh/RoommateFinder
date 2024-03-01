import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyText from '../components/MyText'

const Chats = () => {
  return (
    <SafeAreaView>
      <MyText type='title'>Chats</MyText>
    </SafeAreaView>
  );
};

export default Chats;
