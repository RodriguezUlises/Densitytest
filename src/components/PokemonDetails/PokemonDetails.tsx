import { useSelector } from 'react-redux'
import { globalState } from '../../app/store'
import { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/capitalize';
import './PokemonDetails.css'

function PokemonDetails() {
    const { selectedPokemon } = useSelector((state: globalState) => state.pokemon);

    const typesString = selectedPokemon.types ? selectedPokemon.types.length > 1 ? `${capitalizeFirstLetter(selectedPokemon.types[0].type.name)}/${capitalizeFirstLetter(selectedPokemon.types[1].type.name)}` : capitalizeFirstLetter(selectedPokemon.types[0].type.name) : '';

    useEffect(() => {
      console.log(selectedPokemon)
    }, [])
    

    return (
        <div className='Pokemon-details'>
            <div className='Pokemon-data'>
                <span> <b>Number</b>: {selectedPokemon.order}</span>
                <span> <b>Type</b>: {typesString}</span>
                <span> <b>Height</b>: {selectedPokemon.height}</span>
                <span> <b>Weight</b>: {selectedPokemon.weight}</span>
            </div>
            <div className='Pokemon-container'>
                <div className='Pokemon-stats'>
                    <b>Stats</b>
                    <div>
                        <p>
                            {selectedPokemon.stats?.map((stat, index) => (
                                <span key={index}>{capitalizeFirstLetter(stat.stat.name)}: </span>
                            ))}
                        </p>
                        <p>
                            {selectedPokemon.stats?.map((stat, index) => (
                                <span key={index}>{stat.base_stat}</span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className='Pokemon-abilities'>
                    <b>Abilities</b>
                    <p>
                        {selectedPokemon.abilities?.map((ability, index) => (
                            <span key={index}>{capitalizeFirstLetter(ability.ability.name)}</span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails