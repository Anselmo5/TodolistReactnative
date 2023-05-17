import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Assemble from './components/Assemble';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Assemble/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
