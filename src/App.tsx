import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPokemon } from "./app/pokemonSlice"
import PokemonDisplay from "./components/PokemonDisplay"
import PokedexList from "./components/PokedexList"
import "./App.css"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then(data => dispatch(addPokemon(data.results)))
  }, [])
  

  return (
    <div className="App">
      <img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex Logo" />
      <div className="Content">
        <PokemonDisplay />
        <PokedexList />
      </div>
    </div>
  )
}

export default App
