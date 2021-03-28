import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100vw;
    height: 100%;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;//kieu
    justify-content: flex-start;//can le
    align-items: center;//can cao
    flex-direction: column;//can dong
    background-color: #fff;
    flex:1;
    box-sizing:border-box;
    margin-top: 6em;
`;

export const WrapperTest = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0.5em;
    padding-right: 0.5em;
    box-sizing: border-box;
    margin-bottom: 1em;
    
    
`;

export const ButtonSubmit = styled.button`
    width: 12em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
    border-radius: 0.4em;
    border: 1px solid #000;
    font-size: 0.8em;
    cursor: pointer;
    margin-bottom: 1.5em;
`;


