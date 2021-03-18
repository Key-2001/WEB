import React , { Component } from 'react';
import styled from 'styled-components';
import MainContent from '../../components/main/MainContent'
import LeftMenu from '../../components/main/LeftMenu'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    background: gray;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: solid 1px #000;
    box-sizing:border-box;
`;

const DIFFCULT = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord:'',
      testData: [
        {
          name: "Test 1",
          point: 30,
          time: 30,
          diff: DIFFCULT.one,
          past: false,
        },
        {
          name: "Test 2",
          point: 30,
          time: 30,
          diff: DIFFCULT.three,
          past: true,
        },
        {
          name: "Test 3",
          point: 30,
          time: 30,
          diff: DIFFCULT.five,
          past: false,
        },{
          name: "Test 3",
          point: 30,
          time: 30,
          diff: DIFFCULT.four,
          past: true,
        }
      ],
    }
  }
  searchOnChange(event) {
    console.log("nhan dc",event.target.value)
    this.setState({keyWord: event.target.value})
  }
  filterKeyword(data, key) {
    const result = [];
    for(let i=0;i<data.length;i++){
      if(data[i].name.includes(key) === true)
      {
        result.push(data[i]);
      }
    }
    return result;
  }

  render() {
    return (
      <Wrapper>
        <LeftMenu />
        <MainContent 
          data = {this.filterKeyword(this.state.testData, this.state.keyWord)}
          keyWord={this.state.keyWord}
          searchOnChange={(e) => this.searchOnChange(e)}
        />
      </Wrapper>
    )
  }
}

export default Main;