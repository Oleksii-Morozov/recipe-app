import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../store/themeContext';
import Text from '../components/Text';

const GroceryList = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    background:{
      backgroundColor: theme.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
    }
  });

  return (
    <View style={styles.background}>
      <Text>GroceryList</Text>
    </View>
  )
}

export default GroceryList;
