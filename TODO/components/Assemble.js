import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Image} from 'react-native';
const Assemble =() =>{
    return(
        <View>
                  <Image style={styles.logo} source={require('../assets/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Assemble