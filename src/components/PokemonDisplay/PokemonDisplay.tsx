import { useSelector } from 'react-redux'
import { globalState } from '../../app/store'
import './PokemonDisplay.css'

function PokemonDisplay() {
    const { selectedPokemon } = useSelector((state: globalState) => state.pokemon)
    return (
        <div className='Pokemon-display'>
            {selectedPokemon.name !== '' && (
                <>
                    <img src={selectedPokemon.sprites.front_default} className='Pokemon-image' alt={selectedPokemon.name} />
                    <span className='Shadow'></span>
                </>
            )}
        </div>
    )
}

export default PokemonDisplay