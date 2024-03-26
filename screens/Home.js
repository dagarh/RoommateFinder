import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function Home() {
  const jerseyCity = {
    latitude: 40.7178,
    longitude: -74.0431,
  };

  const hoboken = {
    latitude: 40.7434,
    longitude: -74.0324,
  };

  // Calculate the center and delta for the region encompassing Jersey City and Hoboken
  const centerLatitude = (jerseyCity.latitude + hoboken.latitude) / 2;
  const centerLongitude = (jerseyCity.longitude + hoboken.longitude) / 2;
  const latitudeDelta = Math.abs(jerseyCity.latitude - hoboken.latitude) * 1.5;
  const longitudeDelta = Math.abs(jerseyCity.longitude - hoboken.longitude) * 1.5;

  const initialRegion = {
    latitude: centerLatitude,
    longitude: centerLongitude,
    latitudeDelta,
    longitudeDelta,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} />
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
});
