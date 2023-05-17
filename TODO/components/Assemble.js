import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable,Image, TextInput} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Assemble =() =>{
    return(
        <View>
            <Image style={styles.logo} source={require('../assets/Logo.png')} />
             <TextInput style={styles.inp}> </TextInput>
             <Pressable style={styles.btn}><Text>+</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        bottom:300,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:70,
    },
    inp:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#2F2B2B',
        bottom:250,
        width:260,
        padding:10,
    
    },
    btn:{
        width:57,
        height:58,
        backgroundColor:'#3abea6',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
  
})

export default Assemble