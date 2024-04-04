import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/capitalize';
import PokemonDisplay from '../../components/PokemonDisplay';
import Button from '../../components/Button';
import PokemonDetails from '../../components/PokemonDetails';
import { globalState } from '../../app/store';

import '../../App.css'
import { useEffect } from 'react';

function DetailsPage() {
    const navigate = useNavigate();
    const { selectedPokemon } = useSelector((state: globalState) => state.pokemon);

    useEffect(() => {
      if (selectedPokemon.name === '') navigate('/')
    }, [])
    

  return (
    <div className="App">
        <div className='Return-button'>
            <Button handleClick={() => navigate(-1)} text='Go Back' />
        </div>
        <h1>{capitalizeFirstLetter(selectedPokemon.name)}</h1>
        <div className="Content">
            <PokemonDisplay />
            <PokemonDetails />
        </div>
    </div>
  )
}

export default DetailsPage