import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../store/auth-context'; // Import the AuthContext

function SettingsScreen({ navigation }) {
  const authCtx = useContext(AuthContext); // Use the AuthContext

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName, {userId: 1});
  };

  const handleLogout = () => {
    authCtx.logout(); // Call the logout method from AuthContext
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.Settings}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("Profile")}
      >
        <Text style={styles.Set}>Profile</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("SavedPosts")}
      >
        <Text style={styles.Set}>User Preference</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => navigateToScreen("likes")}
      >
        <Text style={styles.Set}>Change City</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} onPress={() => navigateToScreen('ChangePassword')}>
        <Text style={styles.Set}>Change Password</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={handleLogout}
      >
        <Text style={styles.Set}>Log Out</Text>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Room Mate Finder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 100, // Adjust according to your logo's size
    height: 100, // Adjust according to your logo's size
    resizeMode: "contain",
  },
  footerText: {
    fontSize: 14,
    color: "#000", // Adjust the color as needed
  },
  Settings: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
  },
  box: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  Set: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
