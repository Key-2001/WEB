import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;//kieu
    justify-content: flex-start;//can le
    align-items: center;//can cao
    flex-direction: column;//can dong
    background: #ccc;
    flex:1;
    box-sizing:border-box;
`;
export const Blank = styled.div`
  flex: 1;
`;
export const WrapperTest = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  background-color: red;
  width:100%;
`;