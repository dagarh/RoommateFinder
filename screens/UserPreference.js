import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UserPreference = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://0702-108-5-218-27.ngrok-free.app/roommateFinder/feeds/viewAllfeeds');
                const data = await response.json();
                if (data && data.length > 0) {
                    setUserData(data[data.length - 1]);
                } else {
                    Alert.alert('No data', 'No data available from the API');
                }
            } catch (error) {
                console.error('Failed to fetch data', error);
                Alert.alert('Error', 'Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    const updateData = async () => {
        try {
            const response = await fetch('https://0702-108-5-218-27.ngrok-free.app/roommateFinder/feeds', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const result = await response.json();
            if (response.ok) {
                Alert.alert('Success', 'Data updated successfully');
            } else {
                Alert.alert('Error', result.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Failed to update data', error);
            Alert.alert('Error', 'Failed to update data');
        }
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {userData ? (
                    Object.keys(userData).map((key) => {
                        if (key !== 'userId' && key !== 'feedId') {  // Check to exclude 'userId' and 'feedId'
                            return (
                                <View key={key} style={styles.fieldContainer}>
                                    <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').trim()}:</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={userData[key]}
                                        onChangeText={(text) => setUserData({...userData, [key]: text})}
                                    />
                                </View>
                            );
                        }
                        return null;
                    })
                ) : (
                    <Text>Loading...</Text>
                )}
                <Button title="Save Changes" onPress={updateData} style={styles.saveButton} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    fieldContainer: {
        marginBottom: 10,
    },
    saveButton: {
        marginTop: 20,
    }
});

export default UserPreference;
