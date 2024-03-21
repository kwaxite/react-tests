import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { useState
 } from 'react';


export default function App() {
  const [progress, setProgress] = useState(0);

  const handlePress = () => {
    setProgress((prevProgress) => prevProgress + 0.1);
  };


  return (
    <View style={styles.centered}>
      <ProgressBar progress={progress} width={200} height={20} />
      <Button onPress={handlePress} title="Add rewards" />
      <Text>Progress: {(progress * 100).toFixed(0)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  centered: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#ffc2c2", 
  }, 
  title: { 
    fontSize: 18, 
    marginVertical: 2, 
  }, 
  subtitle: { 
    fontSize: 14, 
    color: "#888", 
  }, 
});
