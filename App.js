import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isPressed, setIsPressed] = useState(false);
  const [message, setMessage] = useState('');

  const handlePress = () => {
    setIsPressed(true); // Change state to reflect button press
    setMessage('Yeeeeyyy mnaaa');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>To-do App</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.listcont}>
      <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]} // Apply conditional style
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        {message ? <Text style={styles.afterButtonText}>{message}</Text> : null}
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5dcc2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listcont: {
    height: 100,
    width: 300,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#e6f3eb',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: '#76CD26', // Color when button is pressed
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  afterbuttext: {
    color: '#098932',
  }
});
