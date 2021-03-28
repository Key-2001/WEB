import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 12em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid; */
    border: 1px solid #000;
    margin: 1em 0;
    border-radius: 0.4em;
`;



export const Row = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;
    margin-left: 2em;
    font-size: 0.9em;
    color: #000;
    margin-top: 0.5em;
    margin-right: 2em;
    letter-spacing: 1px;
`;

export const TitleField = styled.div`
    font-weight: bold;
    margin-right: 0.5em;
    font-size: 0.9em;
`;

export const WrapperAnswer= styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

export const ButtonAnswer = styled.input`
    margin-top: 5px;
    margin-right: 0.6em;
`;
