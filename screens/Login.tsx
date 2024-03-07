import { View, Text, Image, StyleSheet } from "react-native";
import GoogleButton from "../components/GoogleButton";

const Login = () => {
  return (
    <View>
      <Text>Hi 👋‍️‍</Text>
      <Image source={require('../assets/sign-in-image.png')} style={styles.image}/>
      <View>
        <GoogleButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 'auto', // Set the width of the icon
    height: 200, // Set the height of the icon
    marginRight: 8, // Margin between icon and text
  },
});

export default Login;
