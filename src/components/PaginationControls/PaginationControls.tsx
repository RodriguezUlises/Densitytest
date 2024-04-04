import { useSelector, useDispatch } from 'react-redux'
import { globalState } from '../../app/store'
import { changePage } from '../../app/pokemonSlice';
import Button from '../Button';

import './PaginationControls.css'

function PaginationControls() {
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state: globalState) => state.pokemon)
    
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage * 20 > 151;

    const handleBack = () => {
        dispatch(changePage(currentPage - 1));
    }

    const handleNext = () => {
        dispatch(changePage(currentPage + 1));
    }
    
  return (
    <div className='Pagination-controls'>
        <Button isDisabled={isFirstPage} handleClick={handleBack} text='Back' />
        <Button isDisabled={isLastPage} handleClick={handleNext} text='Next' />
    </div>
  )
}

export default PaginationControls