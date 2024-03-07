import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const GoogleButton = () => {
  const handleGoogleSignIn = () => {
    console.log('Google Sign-In Pressed');
  };

  return (
    <TouchableOpacity onPress={handleGoogleSignIn} style={styles.button}>
      <Image
        source={require('../assets/google-icon.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Align icon and text in a row
    backgroundColor: '#000', // Google's brand blue color
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    paddingHorizontal: 12, // Horizontal padding
    paddingVertical: 8, // Vertical padding
    borderRadius: 4, // Rounded corners
    elevation: 3, // Shadow for Android
    shadowOpacity: 0.3, // Shadow for iOS
    shadowRadius: 4,
    shadowOffset: { height: 1, width: 0 },
  },
  icon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    marginRight: 8, // Margin between icon and text
  },
  text: {
    color: 'white', // Text color
    fontWeight: 'bold', // Bold text
  },
});

export default GoogleButton;
