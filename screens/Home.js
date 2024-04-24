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
      title: "Modern Loft in SoHo",
      latitude: 40.7233,
      longitude: -74.0030,
      description: "Stylish loft in a vibrant neighborhood.",
      imageUrl: 'https://example.com/room1.jpg',
      owner: "Ella Fitzgerald",
      contact: "ella@example.com",
      rent: '2500',
      CleanlinessHabits: 'Very Clean',
      NoiseTolerance: 'Moderate',
      SocialPreferences: 'Social',
      DailyRoutines: 'Early Bird',
      DescriptionofCurrentOccupants: 'Three artists in their late 20s',
    },
    {
      id: 2,
      title: "Chic Studio in Williamsburg",
      latitude: 40.7081,
      longitude: -73.9571,
      description: "Chic studio perfect for creative individuals.",
      imageUrl: 'https://example.com/room2.jpg',
      owner: "Miles Davis",
      contact: "miles@example.com",
      rent: '1800',
      CleanlinessHabits: 'Moderate',
      NoiseTolerance: 'Low',
      SocialPreferences: 'Introvert',
      DailyRoutines: 'Mixed',
      DescriptionofCurrentOccupants: 'A young musician',
    },
    {
      id: 3,
      title: "Cozy Apartment in East Village",
      latitude: 40.7265,
      longitude: -73.9815,
      description: "Cozy and affordable apartment in a cultural hotspot.",
      imageUrl: 'https://example.com/room3.jpg',
      owner: "Amy Winehouse",
      contact: "amy@example.com",
      rent: '2200',
      CleanlinessHabits: 'High',
      NoiseTolerance: 'High',
      SocialPreferences: 'Extrovert',
      DailyRoutines: 'Night Owl',
      DescriptionofCurrentOccupants: 'Two graduate students',
    },
    {
      id: 4,
      title: "Luxury Condo in Tribeca",
      latitude: 40.7163,
      longitude: -74.0086,
      description: "High-end living with stunning city views.",
      imageUrl: 'https://example.com/room4.jpg',
      owner: "John Coltrane",
      contact: "john@example.com",
      rent: '4500',
      CleanlinessHabits: 'Very Clean',
      NoiseTolerance: 'Very Low',
      SocialPreferences: 'Social',
      DailyRoutines: 'Early Bird',
      DescriptionofCurrentOccupants: 'A professional couple',
    },
    {
      id: 5,
      title: "Shared Space in Midtown",
      latitude: 40.7549,
      longitude: -73.9840,
      description: "Affordable and lively shared space.",
      imageUrl: 'https://example.com/room5.jpg',
      owner: "Billie Holiday",
      contact: "billie@example.com",
      rent: '1300',
      CleanlinessHabits: 'Moderate',
      NoiseTolerance: 'Moderate',
      SocialPreferences: 'Very Social',
      DailyRoutines: 'Mixed',
      DescriptionofCurrentOccupants: 'Four college students',
    },
    {
      id: 6,
      title: "Sunny Flat in Harlem",
      latitude: 40.8116,
      longitude: -73.9465,
      description: "Bright and sunny flat with spacious layout.",
      imageUrl: 'https://example.com/room6.jpg',
      owner: "Thelonious Monk",
      contact: "thelonious@example.com",
      rent: '1900',
      CleanlinessHabits: 'High',
      NoiseTolerance: 'Low',
      SocialPreferences: 'Introvert',
      DailyRoutines: 'Early Bird',
      DescriptionofCurrentOccupants: 'A young professional',
    },
    {
      id: 7,
      title: "Artist’s Studio in Bushwick",
      latitude: 40.6943,
      longitude: -73.9213,
      description: "Perfect space for artists and creatives.",
      imageUrl: 'https://example.com/room7.jpg',
      owner: "Charlie Parker",
      contact: "charlie@example.com",
      rent: '1600',
      CleanlinessHabits: 'Moderate',
      NoiseTolerance: 'High',
      SocialPreferences: 'Very Social',
      DailyRoutines: 'Night Owl',
      DescriptionofCurrentOccupants: 'Two visual artists',
    },
    {
      id: 8,
      title: "Quiet Retreat in Queens",
      latitude: 40.7282,
      longitude: -73.7949,
      description: "Quiet retreat away from city noise.",
      imageUrl: 'https://example.com/room8.jpg',
      owner: "Nina Simone",
      contact: "nina@example.com",
      rent: '1400',
      CleanlinessHabits: 'Very Clean',
      NoiseTolerance: 'Very Low',
      SocialPreferences: 'Introvert',
      DailyRoutines: 'Early Bird',
      DescriptionofCurrentOccupants: 'An elderly couple',
    },
    {
      id: 9,
      title: "Penthouse in Financial District",
      latitude: 40.7074,
      longitude: -74.0113,
      description: "Luxurious penthouse with breathtaking views.",
      imageUrl: 'https://example.com/room9.jpg',
      owner: "Louis Armstrong",
      contact: "louis@example.com",
      rent: '5000',
      CleanlinessHabits: 'High',
      NoiseTolerance: 'Low',
      SocialPreferences: 'Social',
      DailyRoutines: 'Mixed',
      DescriptionofCurrentOccupants: 'A business executive',
    },
    {
      id: 10,
      title: "Shared Apartment in Brooklyn",
      latitude: 40.6782,
      longitude: -73.9442,
      description: "Friendly shared apartment in a hip area.",
      imageUrl: 'https://example.com/room10.jpg',
      owner: "Duke Ellington",
      contact: "duke@example.com",
      rent: '1700',
      CleanlinessHabits: 'Moderate',
      NoiseTolerance: 'Moderate',
      SocialPreferences: 'Very Social',
      DailyRoutines: 'Night Owl',
      DescriptionofCurrentOccupants: 'Three young professionals',
    }
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
    <Text>Rent: ${listing.rent}</Text>
    <Text>Cleanliness Habits: {listing.CleanlinessHabits}</Text>
    <Text>Noise Tolerance: {listing.NoiseTolerance}</Text>
    <Text>Social Preferences: {listing.SocialPreferences}</Text>
    <Text>Daily Routines: {listing.DailyRoutines}</Text>
    <Text>Description of Current Occupants: {listing.DescriptionofCurrentOccupants}</Text>
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
    width: 300,
    height: 350,
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