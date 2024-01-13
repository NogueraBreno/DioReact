import styled from 'styled-components';

type ButtonProps = {
    onClick: () => void;
    disabled: boolean | undefined;
    children: React.ReactNode;
  };
  
export const ButtonContainer = styled.button<ButtonProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`