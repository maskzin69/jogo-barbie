import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PauseMenu({
  onContinue,
  onBackHome,
}) {
  return (
    <View style={styles.overlay}>
      <View style={styles.menu}>
        <Text style={styles.title}>PAUSADO</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onContinue}
        >
          <Text style={styles.text}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={onBackHome}
        >
          <Text style={styles.text}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  menu: {
    width: "80%",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  button: {
    width: "100%",
    padding: 18,
    backgroundColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});