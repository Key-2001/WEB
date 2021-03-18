import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: green;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f0f2f5;
`;

export const PopupLoginWrapper = styled.div`
    width: 15em;
    background: #fff;
    border-radius: 0.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1em;
    padding-bottom: 1em;
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    margin-bottom:0.1em;
`;

export const Row = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    height: 1.7em;
    border: 1px solid #ccd0d5;
    border-radius: 0.2em;
    outline: none;
    background: rgb(232, 240, 254) !important;
`;

export const Button = styled.button`
    width: 10em;
    margin-top: 2em;
    font-size: 18px;
    font-weight: bold;
    height: 2.2em;
    cursor: pointer;
    background: #1877f2;
    border-radius: 0.35em;
    outline: none;
    color:#fff;
    cursor:pointer;
`;

export const Blank = styled.div`
    width: ${props => props.width}em;
    height: ${props => props.height}em;
`;