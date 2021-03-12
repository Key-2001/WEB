import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 10em;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border: solid 1px #000;
    box-sizing:border-box;
`;

export const Avatar = styled.img`
    width: 6em;
    margin-top: 0.7em;
    /* border: solid; */
    border: solid 1px #000;
    border-radius: 50%;
`;

export const TextField = styled.div`
    width: 100%;
    padding-left: 1.6em;
    box-sizing: border-box;
    font-weight: 500;
    margin-top: 0.3em;
    font-size: 0.8em;
    color:#000;
`;
export const Blank = styled.div`
    flex:1;
`;

export const ButtonLogout = styled.button`
    width: 68%;
    height: 3em;
    font-weight: bold;
    font-size: 0.7em;
    margin-bottom: 1em;
    background-color:#fff;
    color:#000;
`;