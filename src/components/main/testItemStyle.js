import styled from 'styled-components';

export const Wrapper = styled.div`
    width:33.33333%;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    margin: 1em 0.5em;
    border: 1px solid #000;
    border-radius: 0.2em;
    font-size:0.8em;
    padding: 0.6em;
`;

export const Row = styled.div`
    display: inline-flex;
    font-weight: 400;
    font-size: 0.8em;
    
`;

export const TitleField = styled.div`
    padding-right: 0.5em;
    font-size: 1em;
    font-weight: bold;
`;