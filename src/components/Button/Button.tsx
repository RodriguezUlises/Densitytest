import './Button.css';

type Button = {
    isDisabled?: boolean;
    text: string;
    handleClick?: () => void;
}

function Button({ isDisabled, handleClick, text }: Button) {
  return (
    <button className='Button' disabled={isDisabled} onClick={handleClick}>{text}</button>
  )
}

export default Button