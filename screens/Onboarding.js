import React, { useEffect } from 'react';
import { Image, StyleSheet, View as DefaultView,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyButton from '../components/MyButton';
import MyText from '../components/MyText';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Onboarding() {
  const navigation = useNavigation();

  async function handleOnContinue() {
    await AsyncStorage.setItem('onboardingComplete', 'true');
    navigation.navigate('Home');
  }

  useEffect(() => {
    async function checkOnboarding() {
      const onboardingComplete = await AsyncStorage.getItem('onboardingComplete');
      if (onboardingComplete === 'true') {
        navigation.navigate('Main');
      }
    }
    checkOnboarding();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MyText style={styles.title} type="title">Welcome to</MyText>
      <MyText style={styles.title} type="title">Roommate Finder</MyText>

      {appFeatures.map((feature, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image source={feature.icon} style={styles.icon} />
          <DefaultView style={styles.textWrapper}>
            <MyText type="caption" style={styles.featureTitle}>{feature.title}</MyText>
            <MyText type="caption" style={styles.featureDescription}>{feature.description}</MyText>
          </DefaultView>
        </View>
      ))}

      <MyButton
        style={styles.button}
        title="Continue"
        onPress={handleOnContinue}
      />
    </View>
  );
}

const appFeatures = [
  {
    icon: require('../assets/post.png'),
    title: 'Creating Post',
    description: 'Create posts and share requirements with members of the community',
  },
  {
    icon: require('../assets/message.png'),
    title: 'Create chats with Others',
    description: 'Start a conversation with friends, send messages at the speed of light',
  },
  {
    icon: require('../assets/bell.png'),
    title: 'Keep updated with notifications',
    description: 'Get notified whenever someone likes your posts or sends you a message',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  icon: {
    width: 58,
    height: 58,
    marginRight: 13,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 13,
  },
  textWrapper: {
    flex: 1,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featureDescription: {
    color: '#CCCCCC',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#2979FF',
  },
});
