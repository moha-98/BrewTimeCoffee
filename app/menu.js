
import  { useState, useEffect } from "react";

import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import imagg from "../assets/logo.jpg";
import imag from "../assets/background.jpg";
import imagg2 from "../assets/cappuccino.png";
import imagg3 from "../assets/Mocha.png";
import imagg4 from "../assets/Espresso.png";

export default function Menu() {



  const [message, setMessage] = useState("");

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setMessage("☕ Welcome to BrewTime!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <ImageBackground source={imag} style={styles.container} blurRadius={2}>
      <Text style={styles.Text}>☕ Menu ☕</Text>
      {message !== "" && <Text style={styles.message}>{message}</Text>}


      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

       
        <View style={styles.viewf}>
          <Image source={imagg2} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.t1}>Cappuccino</Text>
            <Text style={styles.way}>Creamy cream + Espresso</Text>
            <Text style={styles.prc}>20 DH</Text>
          </View>
        </View>

      
        <View style={styles.viewf}>
          <Image source={imagg4} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.t1}>Espresso</Text>
            <Text style={styles.way}>Strong black coffee shot</Text>
            <Text style={styles.prc}>15 DH</Text>
          </View>
        </View>

       
        <View style={styles.viewf}>
          <Image source={imagg3} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.t1}>Mocha</Text>
            <Text style={styles.way}>Chocolate + Milk + Coffee</Text>
            <Text style={styles.prc}>25 DH</Text>
          </View>
        </View>

      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "yellow",
    marginBottom: 20,
    paddingTop: 80,
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  viewf: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffcc",
    width: 320,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  t1: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  way: {
    color: "black",
    fontSize: 14,
    marginVertical: 5,
  },
  prc: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-end",
  },
  backButton: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "red",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.5)",
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 10,
  marginTop: 10,
  fontSize: 18,
  fontWeight: "bold",
},

});







