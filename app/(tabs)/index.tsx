import Card from "@/components/Card";
import { View, Text, StyleSheet } from "react-native";


const HomeScreen = () => {
  return (
    <View style={styles.contenedor}>
      <Card />
    </View>
  )
};


const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#1e1e1e',
  },
});


export default HomeScreen;