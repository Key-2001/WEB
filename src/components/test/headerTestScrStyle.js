import styled from 'styled-components';

export const Wrapper_plus = styled.div`
    width: 100%;
    background-color: #ccc;
    padding: 1em 0;
    position: fixed;
    box-sizing: border-box;
    margin-left: -8px;
`;


export const Wrapper = styled.div`
    width: 30%;
    background-color: #fff;
    padding: 0.5em;
    border-radius: 0.3em;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
    margin-right:auto;
    margin-left:auto;
`;

export const Column = styled.div`
    width: ${props=> props.width};
    display: flex;
    font-weight: 500;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    margin-left: 0.5em;
    font-size: 0.9em;
    color: #000;
`;

export const TitleField = styled.div`
    font-weight: bold;
    margin-right: 0.5em;
    font-size: 0.9em;
`;
export const Checkbox = styled.input`
    display: flex;
    box-sizing: border-box;
    margin-top: 0.6em;
`; 
export const ButtonStart = styled.button`
    margin-right: 0.5em;
    height: 2.5em;
    border: 1px solid #000;
    border-radius: 0.2em;
    cursor: pointer;
    font-size: 0.6em;
    font-weight: bold;
    background-color: #fff;
`;

export const StarIcon = styled.img`
    width: 1em;
    margin-left: 0.25em;
`;