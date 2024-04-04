import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { globalState } from '../../app/store'
import { changeSelectedPokemon, pokemonDetails } from '../../app/pokemonSlice';
import { capitalizeFirstLetter } from '../../utils/capitalize';
import PaginationControls from '../PaginationControls';
import { useEffect, useRef } from 'react';
import './PokedexList.css'

function PokedexList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const pokedexRef: any = useRef(null);

    const { pokemons, currentPage, selectedPokemon } = useSelector((state: globalState) => state.pokemon)

    const pokemonPerPage = 20;
    const lastPokemonIndex = pokemonPerPage * currentPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonPerPage;
    const pokemonInPage = pokemons.slice(firstPokemonIndex, lastPokemonIndex);

    const handleClick = async (selectedEntry: string) => {
        const pokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedEntry}`)
            .then(response => response.json())
            .then((pokemonData: pokemonDetails) => dispatch(changeSelectedPokemon(pokemonData)))
    }

    const handleDoubleClick = () => {
      navigate(`/details`)
    }

    useEffect(() => {
      pokedexRef.current.addEventListener('dblclick', handleDoubleClick)
    }, [])
    

  return (
    <div className='Pokedex-container'>
      <div className='Pokedex-list' ref={pokedexRef}>
        {pokemonInPage.map((pokemon, index) => (
            <button
              key={pokemon.name}
              className={`Pokedex-entry ${selectedPokemon.name === pokemon.name && 'Pokedex-selected'}`}
              onClick={() => handleClick(pokemon.name)}
            >
              No.{(index + 1) + firstPokemonIndex} {capitalizeFirstLetter(pokemon.name)}
            </button>
        ))}
      </div>
      <PaginationControls />
    </div>
  )
}

export default PokedexList