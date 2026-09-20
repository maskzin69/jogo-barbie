import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Character({ genero, roupas }) {
  const personagem =
    genero === "masculino" ? "👨" : "👩";

  const cabelos =
    genero === "feminino"
      ? ["👩", "👩‍🦱", "👩‍🦰", "👱‍♀️", "👩‍🦳"]
      : ["💇", "👨‍🦱", "👨‍🦰", "👱", "🧑‍🦳"];

  const camisas =
    genero === "feminino"
      ? ["👚", "👗", "🥻", "👙", "🩱"]
      : ["👕", "👔", "🧥", "🥼", "🎽"];

  const calcas =
    genero === "feminino"
      ? ["👖", "🩳", "👗", "🩱", "👖"]
      : ["👖", "🩳", "🩲", "👖", "🩳"];

  const tenis =
    genero === "feminino"
      ? ["👟", "👠", "🥿", "🥾", "👢"]
      : ["👟", "🥾", "👞", "🩴", "👟"];

  return (
    <View style={styles.container}>
      <Text style={styles.character}>
        {personagem}
      </Text>

      <Text style={styles.item}>
        {cabelos[roupas?.cabelo || 0]}
      </Text>

      <Text style={styles.item}>
        {camisas[roupas?.camisa || 0]}
      </Text>

      <Text style={styles.item}>
        {calcas[roupas?.calca || 0]}
      </Text>

      <Text style={styles.item}>
        {tenis[roupas?.tenis || 0]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  character: {
  fontSize: 60,
  position: "absolute",
  top: -260,
  left: -180,
},

  item: {
    fontSize: 45,
    marginTop: -10,
  },
});