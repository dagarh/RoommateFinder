import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function Home() {
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
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
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
    width: 200, // Set width and height as needed
    height: 200,
  },
  roomImage: {
    width: '100%',
    height: 100, // Set image height
    resizeMode: 'cover'
  },
  title: {
    fontWeight: 'bold',
  }
});
