import { View, Text, Button,StyleSheet, ImageBackground, Image} from "react-native";
import { router } from "expo-router";
import imagg from "../assets/logo.jpg";
import imag from "../assets/background.jpg"
import imagg2 from "../assets/cappuccino.png";
import imagg3 from "../assets/Mocha.png";
import imagg4 from "../assets/Espresso.png";



export default function Menu() {
  return (
    <ImageBackground source ={imag} style={styles.container}>
       <Text style={styles.Text}>Menu</Text>

    <View   style={styles.viewf}>  
      <Image source={imagg2} style={{width:100,height:100}} />
      <Text style={styles.t1}  >Cappuccino
      </Text>
      <Text style={styles.way}>Creamy cream + Espresso
      </Text>
    
    </View>

    <View style={styles.viewf}>  
      <Image source={imagg3} style={{width:100,height:100}} />
      <Text style={styles.t1}>Esspresso</Text>
       <Text style={styles.way}>Creamy cream + Espresso</Text>

    
    </View>
    <View style={styles.viewf}> 
      <Image source={imagg4} style={{width:100,height:100}} /> 
      <Text style={styles.t1}>Mocha</Text>
      <Text style={styles.way}>Chocolate + Milk + Coffee</Text>
    
    </View>
      <Button title="back" onPress={() => router.back()} />
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
    color: 'white',
    marginBottom: 20,
    paddingTop: 100,
  },
  viewf:{
color: 'red',
backgroundColor: '#ffffff97',
width : 300,
height: 150,
margin:10,
borderRadius: 10,


  },
  t1:{
    color: 'red',
    textAlign: 'center',
    paddingTop: 12,
  },
  way:{
    color : 'black',
    marginLeft: 60,
  }

  });    