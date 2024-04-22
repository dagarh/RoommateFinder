import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const channels = [
  { id: 1, name: 'General Discussion' },
  { id: 2, name: 'Only Females' },
  { id: 3, name: 'No Smoomking Rooms' },
  { id: 4, name: 'Students of Stevens' },
  { id: 5, name: 'Only Working professionals' },
  { id: 6, name: 'Vegan People' }
];

export default function ChannelsList({ navigation }) {
  return (
    <View style={styles.container}>
      {channels.map(channel => (
        <TouchableOpacity
          key={channel.id}
          style={styles.channelButton}
          onPress={() => navigation.navigate('Chats', { channelId: channel.id })}
        >
          <Text style={styles.channelText}>{channel.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0'
  },
  channelButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  channelText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333333'
  }
});
