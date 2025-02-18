import { View, Text, StyleSheet } from "react-native";


const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Soy home</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});


export default HomeScreen;