import React , { Component } from 'react';
import {
    Wrapper,
} from './mainContentStyle'
import Header from'./Header'
import Pagination from "react-js-pagination";


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
        <Wrapper>
            <Header/>
            
        </Wrapper>
    )
  }
}

export default MainContent;
