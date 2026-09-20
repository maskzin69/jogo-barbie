import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Character from "./Character";
import CategorySelector from "./CategorySelector";
import ClothingOptions from "./ClothingOptions";
import PauseMenu from "./PauseMenu";
import GyroscopeController from "./GyroscopeController";

export default function GameScreen({
  genero,
  onBackHome,
}) {
  const [categoria, setCategoria] = useState("cabelo");
  const [pausado, setPausado] = useState(false);

  const [roupas, setRoupas] = useState({
    cabelo: 0,
    camisa: 0,
    calca: 0,
    tenis: 0,
  });

  function trocarRoupa(direcao) {
    setRoupas((estadoAtual) => {
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

      const quantidade = opcoes[categoria].length;

      let novaPosicao =
        estadoAtual[categoria] + direcao;

      if (novaPosicao >= quantidade) {
        novaPosicao = 0;
      }

      if (novaPosicao < 0) {
        novaPosicao = quantidade - 1;
      }

      return {
        ...estadoAtual,
        [categoria]: novaPosicao,
      };
    });
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.pauseButton}
        onPress={() => setPausado(true)}
      >
        <Text style={styles.pauseText}>☰</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Vista seu personagem
      </Text>

      <View style={styles.characterArea}>
        <Character
          genero={genero}
          roupas={roupas}
        />
      </View>

      <View style={styles.controls}>
        <CategorySelector
          categoriaSelecionada={categoria}
          onSelectCategory={setCategoria}
        />

        <ClothingOptions
          categoria={categoria}
          roupas={roupas}
          genero={genero}
          onSelectOption={(indice) => {
            setRoupas((estadoAtual) => ({
              ...estadoAtual,
              [categoria]: indice,
            }));
          }}
        />
      </View>

      <GyroscopeController
        onRotate={trocarRoupa}
      />

      {pausado && (
        <PauseMenu
          onContinue={() => setPausado(false)}
          onBackHome={onBackHome}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 80,
  },

  pauseButton: {
    position: "absolute",
    top: 105,
    right: 17,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    zIndex: 10,
  },

  pauseText: {
    fontSize: 25,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

   characterArea: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: -30,
},

  controls: {
    paddingBottom: 30,
  },
});