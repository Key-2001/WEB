import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:5em;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;//kieu
    justify-content: flex-start;//can le
    align-items: center;//can cao
    flex-direction: row;//can dong
    background-color:#fff;
    border: solid 1px #000;
`;

export const InputSearch = styled.input`
    width: 24em;
    margin-left: 2em;
    height: 2.8em;
    border-radius: 0.2em;
    box-sizing: border-box;
    font-size: 0.7em;
    border: solid 1px #000;
`;

export const Branch = styled.div`
    flex:1;
`;

export const ButtonGoto = styled.button`
    margin-left: 1.8em;
    width: 8em;
    height: 2.8em;
    border-radius: 0.2em;
    font-weight: bold;
    font-size: 0.7em;
    border: solid 1px #000;
    background-color:#fff;
    color:#000;
    cursor:pointer;
`;
export const Select = styled.select`
    margin-right: 2em;
    width: 5.5em;
    height: 2;
    height: 2.8em;
    border: solid 1px #000;
    border-radius: 0.2em;
    font-weight: 500;
`;
