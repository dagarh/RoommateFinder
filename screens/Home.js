import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function Home({ navigation } ) {
  const initialRegion = {
    latitude: 40.730610,
    longitude: -73.935242,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Enhanced listings with images and owner details
  const listings = [
    {
      id: 1,
      title: "Room near Central Park",
      latitude: 40.748817,
      longitude: -73.985428,
      description: "Spacious room with a great view of the city.",
      imageUrl: 'https://example.com/room1.jpg',
      owner: "John Doe",
      contact: "john@example.com"
    },
    {
      id: 2,
      title: "Room in Downtown JC",
      latitude: 40.7178,
      longitude: -74.0431,
      description: "Modern room with amenities nearby.",
      imageUrl: 'https://example.com/room2.jpg',
      owner: "Jane Smith",
      contact: "jane@example.com"
    },
    {
      id: 3,
      title: "Cozy Hoboken Room",
      latitude: 40.7434,
      longitude: -74.0324,
      description: "Comfortable and affordable.",
      imageUrl: 'https://example.com/room3.jpg',
      owner: "Alice Johnson",
      contact: "alice@example.com"
    },
    // Additional room listings
    { id: 4, title: "Luxury Studio in Manhattan", latitude: 40.758896, longitude: -73.985130, description: "High-end studio in the heart of Manhattan.", imageUrl: 'https://example.com/room4.jpg', owner: "Charlie Brown", contact: "charlie@example.com" },
    { id: 5, title: "Quiet Retreat in Queens", latitude: 40.704279, longitude: -73.809478, description: "Peaceful spot with garden access.", imageUrl: 'https://example.com/room5.jpg', owner: "Lucy Smith", contact: "lucy@example.com" },
    { id: 6, title: "Budget Room near NYU", latitude: 40.729515, longitude: -73.996460, description: "Affordable room ideal for students.", imageUrl: 'https://example.com/room6.jpg', owner: "Linus Van Pelt", contact: "linus@example.com" },
    { id: 7, title: "Shared Apartment in Brooklyn", latitude: 40.650002, longitude: -73.949997, description: "Cozy shared space, great for newcomers.", imageUrl: 'https://example.com/room7.jpg', owner: "Sally Brown", contact: "sally@example.com" },
    { id: 8, title: "Private Room in Staten Island", latitude: 40.579021, longitude: -74.151535, description: "Private room with excellent amenities.", imageUrl: 'https://example.com/room8.jpg', owner: "Rerun Van Pelt", contact: "rerun@example.com" },
    { id: 9, title: "Convenient Loft in Midtown", latitude: 40.754932, longitude: -73.984016, description: "Perfect location with modern facilities.", imageUrl: 'https://example.com/room9.jpg', owner: "Peppermint Patty", contact: "patty@example.com" },
    { id: 10, title: "Spacious Condo in the Bronx", latitude: 40.837048, longitude: -73.865433, description: "Spacious and sunny condo with great views.", imageUrl: 'https://example.com/room10.jpg', owner: "Marcie Jones", contact: "marcie@example.com" },
    { id: 11, title: "Artistic Flat in Harlem", latitude: 40.811550, longitude: -73.946477, description: "Creative space ideal for artists.", imageUrl: 'https://example.com/room11.jpg', owner: "Franklin Armstrong", contact: "franklin@example.com" },
    
  ];
  

  const [modalVisible, setModalVisible] = useState(false);
  const [newListing, setNewListing] = useState({
    title: '',
    description: '',
    imageUrl: '',
    owner: '',
    contact: '',
    rent: '',
    CleanlinessHabits: '',
    NoiseTolerance: '',
    SocialPrefernces: '',
    DailyRoutines: '',
    DescriptionofCurrentOccupants: '',
  });

  const handleAddListing = async () => {
    try {
      const response = await fetch('https://0702-108-5-218-27.ngrok-free.app/roommateFinder/feeds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: newListing.contact,
          rent: newListing.rent,
          cleanlinessHabits: newListing.CleanlinessHabits,
          noisetolerance: newListing.NoiseTolerance,
          socialPreferences: newListing.SocialPrefernces,
          sleepingSchedules: newListing.DailyRoutines,
          location: newListing.description,
          descriptionOfCurrentOccupants: newListing.DescriptionofCurrentOccupants,
          dailyRoutines: newListing.DailyRoutines
        })
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert("Success", "Listing added successfully!");
        setModalVisible(false);
      } else {
        Alert.alert("Error", result.message || "An error occurred");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to add listing. Please try again later.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            coordinate={{ latitude: listing.latitude, longitude: listing.longitude }}
            title={listing.title}
          >
            <Callout>
              <View style={styles.calloutView}>
                <Image source={{ uri: listing.imageUrl }} style={styles.roomImage} />
                <Text style={styles.title}>{listing.title}</Text>
                <Text>{listing.description}</Text>
                <Text>Owner: {listing.owner}</Text>
                <Text>Contact: {listing.contact}</Text>
                <Button title="Chat" onPress={() => navigation.navigate('Chats')} />
      </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput style={styles.input} placeholder="Title" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, title: text})} />
          <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, description: text})} />
          <TextInput style={styles.input} placeholder="Image URL" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, imageUrl: text})} />
          <TextInput style={styles.input} placeholder="Owner" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, owner: text})} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, contact: text})} />
          <TextInput style={styles.input} placeholder="Rent" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, rent: text})} />
          <TextInput style={styles.input} placeholder="Cleanliness Habits" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, CleanlinessHabits: text})} />
          <TextInput style={styles.input} placeholder="Noise Tolerance" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, NoiseTolerance: text})} />
          <TextInput style={styles.input} placeholder="Social Prefernces" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, SocialPrefernces: text})} />
          <TextInput style={styles.input} placeholder="Daily Routines" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, DailyRoutines: text})} />
          <TextInput style={styles.input} placeholder="Description of Current Occupants" placeholderTextColor="#999" onChangeText={(text) => setNewListing({...newListing, DescriptionofCurrentOccupants: text})} />
          <Button title="Add Listing" onPress={handleAddListing} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  calloutView: {
    width: 200,
    height: 220,
  },
  roomImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  },
  title: {
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    top: 70,
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    width: 250,
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  }
});