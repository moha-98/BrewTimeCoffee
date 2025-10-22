import {  Text, Button,View, ImageBackground, StyleSheet} from "react-native";
import { router } from "expo-router";
import imagg from "../assets/logo.jpg";
import imag from '../assets/background.jpg';



export default function Index() {
  return (

   
    <ImageBackground  source ={imag} style={styles.container}>
      <Text style={styles.Text}>BrewTimeCoffee</Text>
      <Text style={styles.para}> Welcome to BrewTimeCoffee  
Experience the art of enjoying every perfect sip.

</Text>


      <View style={styles.backe}>

        <View style={styles.btn}>
        <Button title="Go to Menu" onPress={() => router.push("/menu")} />
        </View>

      </View>
      
    </ImageBackground>


    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Text:{
    color: "yellow",
    marginBottom:200,
    paddingTop: 80,
    fontSize: 20,
  },
  para:{
     color: "white",
    marginBottom:200,
    paddingTop: 80,
    marginLeft:10,
    fontSize: 20,
  },
  btn:{
    backgroundColor: "#dbd4d4ff",
    borderRadius: 10,


    
  },
  // backe:{
  //   backgroundColor: '#eff0ea41',
  //   width: 200,
  //   height: 50,
  // }

});