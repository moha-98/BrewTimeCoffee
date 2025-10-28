import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import imag from "../assets/background.jpg";

export default function Index() {
  const router = useRouter();
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSubtitle(
        "Welcome to BrewTimeCoffee\nExperience the art of enjoying every perfect sip."
      );
    }, 500);
  }, []);

  return (
    <ImageBackground source={imag} style={styles.container} resizeMode="cover">
      <View style={styles.header}>
        <Text style={styles.title}>BrewTimeCoffee</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/menu")}
        >
          <Text style={styles.btnText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 44,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Georgia",  
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#e9e4d8ff",
    textAlign: "center",
    lineHeight: 24,
  },
  footer: {
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  btnText: {
    color: "#8B4513",
    fontSize: 18,
    fontWeight: "bold",
  },
});
