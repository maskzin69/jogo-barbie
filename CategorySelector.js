import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function CategorySelector({
  categoriaSelecionada,
  onSelectCategory,
}) {
  const categorias = [
    { id: "cabelo", nome: "💇" },
    { id: "camisa", nome: "👕" },
    { id: "calca", nome: "👖" },
    { id: "tenis", nome: "👟" },
  ];

  return (
    <View style={styles.container}>
      {categorias.map((categoria) => (
        <TouchableOpacity
          key={categoria.id}
          style={[
            styles.button,
            categoriaSelecionada === categoria.id &&
              styles.selected,
          ]}
          onPress={() => onSelectCategory(categoria.id)}
        >
          <Text style={styles.icon}>{categoria.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },

  button: {
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

  icon: {
    fontSize: 28,
  },
});