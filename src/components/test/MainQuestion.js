import React , { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {
    Wrapper,Content, Blank, WrapperTest, ButtonSubmit
} from './mainQuestionStyle'
import Question from './Question';



class MainQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
    console.log("data =",this.props.data)
  }

  renderQuestions () {
    const items = [];
    for(let i = 0;i < this.props.data.length;i++){
      const item = (
        <Question
            index = {this.props.data[i].index}
            content = {this.props.data[i].content}
            answerA = {this.props.data[i].answer[0]}
            answerB = {this.props.data[i].answer[1]}
            answerC = {this.props.data[i].answer[2]}
            answerD = {this.props.data[i].answer[3]}
            trueanswer = {this.props.data[i].trueAnswer}
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

    return (
        <Wrapper> 
          {this.renderQuestions()}
          <ButtonSubmit type="button"
            onClick={()=>{

            }}
          >Submit</ButtonSubmit>
        </Wrapper>
    )
  }
}

export default MainQuestion;