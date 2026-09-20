import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function ClothingOptions({
  categoria,
  roupas,
  genero,
  onSelectOption,
}) {
    
  const opcoes = {
  cabelo:
    genero === "feminino"
      ? ["👩", "👩‍🦱", "👩‍🦰", "👱‍♀️", "👩‍🦳"]
      : ["💇", "👨‍🦱", "👨‍🦰", "👱", "🧑‍🦳"],

  camisa:
    genero === "feminino"
      ? ["👚", "👗", "🥻", "👙", "🩱"]
      : ["👕", "👔", "🧥", "🥼", "🎽"],

  calca:
    genero === "feminino"
      ? ["👖", "🩳", "👗", "🩱", "👖"]
      : ["👖", "🩳", "🩲", "👖", "🩳"],

  tenis:
    genero === "feminino"
      ? ["👟", "👠", "🥿", "🥾", "👢"]
      : ["👟", "🥾", "👞", "🩴", "👟"],
};

  const lista = opcoes[categoria];

  return (
    <View style={styles.container}>
      {lista.map((opcao, indice) => (
        <TouchableOpacity
          key={indice}
          style={[
            styles.option,
            roupas[categoria] === indice && styles.selected,
          ]}
          onPress={() => onSelectOption(indice)}
        >
          <Text style={styles.emoji}>{opcao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  option: {
    width: 55,
    height: 55,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  selected: {
    borderWidth: 3,
    borderColor: "black",
  },

  emoji: {
    fontSize: 28,
  },
});