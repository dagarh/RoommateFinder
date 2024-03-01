import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import MyText from '../components/MyText';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.navigate('Onboarding');
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyText type="title">Home</MyText>
    </SafeAreaView>
  );
}
