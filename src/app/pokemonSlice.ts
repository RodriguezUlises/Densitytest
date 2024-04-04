import { createSlice } from "@reduxjs/toolkit";

type pokemon = {
    name: string;
    url: string;
}

export type pokemonDetails = {
    name: string;
    sprites: {
        front_default: string
    };
    order?: number;
    types?: Array<any>;
    height?: number;
    weight?: number;
    stats?: Array<any>;
    abilities?: Array<any>;
 }

export type pokemonState = {
    pokemons: Array<pokemon>;
    selectedPokemon: pokemonDetails;
    currentPage: number;
}

const initialState: pokemonState = {
    pokemons: [],
    selectedPokemon: {
        name: '',
        sprites: {
            front_default: ''
        }
    },
    currentPage: 1,
}

const pokemonsSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, actions) => {
            state.pokemons = actions.payload
        },
        changeSelectedPokemon: (state, actions) => {
            state.selectedPokemon = actions.payload
        },
        changePage: (state, actions) => {
            state.currentPage = actions.payload
        }
    }
})

export const { addPokemon, changeSelectedPokemon, changePage } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;