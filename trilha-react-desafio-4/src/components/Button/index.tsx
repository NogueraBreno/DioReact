import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";


const Button = ({ title, onClick , disabled}: IButtonProps) => {
  const handleClick  = () => {
    onClick = onClick;
  };

  return <ButtonContainer onClick={handleClick} disabled={disabled} >{title}</ButtonContainer>;
};

export default Button;
