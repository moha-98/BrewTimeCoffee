import { StatusBar,Link } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground,Pressable } from 'react-native';

import imagg from "./assets/back.jpg"

export default function App() {
  return (
  
    <ImageBackground source ={imagg} style={styles.container} >
      
      <Text style={styles.Text} >BrewTimeCoffe
      </Text>
     
      <Pressable
        onPress={() => alert('Pressed!')}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, 
        ]}
      >
        <Text style={styles.buttonText}>Click Here</Text>
        <Link href="\menu">to menu</Link>

      </Pressable>


      <StatusBar style="auto" />
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
  Text :{
    color: 'red',
    backgroundColor:"rgba(209, 219, 213, 0.54)",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonText : {
    color : 'red',
    backgroundColor: 'yellow',
    margin: 200,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',

  }

});
