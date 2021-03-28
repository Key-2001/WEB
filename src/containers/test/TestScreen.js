import React , { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';
import HeaderTestScr from '../../components/test/HeaderTestScr'
import MainQuestion from '../../components/test/MainQuestion'
import api from '../../services/api'


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

class TestScreen extends Component {
    constructor(props) {
        super(props);
         this.state={
          id : window.localStorage.getItem('exampleId'),
          Question:[],
         }
         
    }

  
    
componentDidMount(){
  // console.log("Question")
  api.create().getId(this.state.id)
  .then(response =>{
    const{data} = response
    console.log("data",response)
    this.setState({
                    Question: response.data.questions
    });
    console.log("aaaa",this.state.Question)
  })
  .catch((error) => {
    //const { message } = error;
    console.log('error: ', error);
  });
}    



  render(){
    return (
      <WrapperTest>
        <HeaderTestScr/>
        <MainQuestion
          data = {this.state.Question}
        />
      </WrapperTest>
    )
  }
}
export default TestScreen;