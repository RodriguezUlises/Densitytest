import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";
import { pokemonState } from "./pokemonSlice";

export type globalState = {
  pokemon: pokemonState
}

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice
  }
})