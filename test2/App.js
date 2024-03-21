import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Come here")
  }
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hi everyone, still practising this is going to be a very gool lond gtea  dkdi t lld i lskd  tild doii flwhw </Text>
      <TouchableWithoutFeedback onPress={()=>console.log('image tapped')}>
      <Image
        blurRadius={1}
        source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200"
      }} />
      </TouchableWithoutFeedback>
      <Button
        style={styles.title}
        color={"orange"}
        title='Click' 
        onPress={() => Alert.alert("Nana", "My message", [{ text: "Yes", onPress: () => console.log('yes') }, { text: 'No', onPress: () => console.log("no") }])} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
