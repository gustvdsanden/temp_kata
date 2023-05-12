<template>
  <h1>fida-prototype</h1>
  <div class="board">
    <div
      v-for="([square, param], index) of boardMapArray"
      :key="square"
      class="square"
      :class="{ 'square--black': isBlackSquare(index) }"
    >
      <div v-if="param" class="square__content">
        <Rook v-if="param.piece === 'rook'" :color="param.color" />
        <Queen v-if="param.piece === 'queen'" :color="param.color" />
        <King v-if="param.piece === 'king'" :color="param.color" />
        <Pawn v-if="param.piece === 'pawn'" :color="param.color" />
        <Bishop v-if="param.piece === 'bishop'" :color="param.color" />
        <Knight v-if="param.piece === 'knight'" :color="param.color" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Rook, Queen, King, Pawn, Bishop, Knight } from "./pieces";

const boardMap = ref(
  new Map<string, { piece: string; color: "black" | "white" } | null>()
);

const boardMapArray = computed(() => Array.from(boardMap.value));

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

letters.reverse().forEach((letter) =>
  numbers.forEach((number) => {
    const combination = `${letter}${number}`;

    boardMap.value.set(combination, null);
  })
);

boardMap.value.set("a1", { piece: "rook", color: "white" });
boardMap.value.set("a2", { piece: "queen", color: "white" });
boardMap.value.set("a3", { piece: "king", color: "white" });
boardMap.value.set("a4", { piece: "pawn", color: "white" });
boardMap.value.set("a5", { piece: "bishop", color: "white" });
boardMap.value.set("a6", { piece: "knight", color: "white" });
boardMap.value.set("b1", { piece: "rook", color: "black" });
boardMap.value.set("b2", { piece: "queen", color: "black" });
boardMap.value.set("b3", { piece: "king", color: "black" });
boardMap.value.set("b4", { piece: "pawn", color: "black" });
boardMap.value.set("b5", { piece: "bishop", color: "black" });
boardMap.value.set("b6", { piece: "knight", color: "black" });

function isBlackSquare(index: number) {
  return (index + 1 + (Math.floor(index / 8) % 2)) % 2 === 0;
}
</script>

<style lang="scss" scoped>
.board {
  height: 80vh;
  aspect-ratio: 1;
  margin: 50px auto;
  border: 1px solid black;
  display: grid;
  background-color: rgb(169, 169, 169);
  grid-template-columns: repeat(auto-fill, calc(80vh / 8));
  grid-template-rows: repeat(auto-fill, calc(80vh / 8));
}
.square {
  display: inline-flex;
  aspect-ratio: 1;
  &--black {
    background-color: rgb(61, 61, 61);
    color: white;
  }
  &--selected {
    background-color: red;
    color: white;
  }
}
.square__content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
