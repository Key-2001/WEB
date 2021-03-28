import React , { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
    Wrapper,Content, Blank, WrapperTest
} from './mainContentStyle'
import Header from'./Header'
import TestItem from './TestItem'


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
    console.log("data =",this.props.data)
  }

  renderTests () {
    const items = [];
    for(let i = 0;i < this.props.data.length;i++){
      const item = (
        <TestItem
          name = {this.props.data[i].name}
          point ={this.props.data[i].point}
          time ={this.props.data[i].time}
          diff ={this.props.data[i].diff}
          past ={this.props.data[i].past}
          id={this.props.data[i].id}
        />
      )
      items.push(item);
    }
    return(
      <WrapperTest>
        {items}
      </WrapperTest>
    )
  }

  render() {
    const totalPage = parseInt(this.props.total /10) +1;
    return (
        <Wrapper> 
          <Header
            keyWord = {this.props.keyWord}
            searchOnChange = {this.props.searchOnChange}
          />
              {
                this.renderTests()
              }
            
            <Blank/>
            <Pagination
              count={totalPage}
              page={this.props.currentPage}
              variant="outlined"
              shape="rounded"
              style={{
                marginBottom: '1em',
                
              }}
              onChange={(event,page)=>{
                console.log('page = ',page)
                this.props.changePage(page)
              }}
            />
        </Wrapper>
    )
  }
}

export default MainContent;