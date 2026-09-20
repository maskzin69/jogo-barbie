import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function HomeScreen({ onSelectGender }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Vestir</Text>

      <Text style={styles.subtitle}>
        Escolha seu personagem
      </Text>

      <View style={styles.characters}>
        <TouchableOpacity
          style={styles.characterButton}
          onPress={() => onSelectGender("masculino")}
        >
          <Text style={styles.character}>👨</Text>
          <Text style={styles.buttonText}>Masculino</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.characterButton}
          onPress={() => onSelectGender("feminino")}
        >
          <Text style={styles.character}>👩</Text>
          <Text style={styles.buttonText}>Feminino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    marginBottom: 40,
  },

  characters: {
    flexDirection: "row",
    gap: 25,
  },

  characterButton: {
    width: 140,
    height: 180,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  character: {
    fontSize: 70,
    marginBottom: 15,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});