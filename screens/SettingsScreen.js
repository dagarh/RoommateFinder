
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../store/auth-context';

const SettingsScreen = () => {
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.logout();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default SettingsScreen;
