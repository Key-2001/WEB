import React , { Component } from 'react';
import{
  TitleField,
  Wrapper, Row, Column, Checkbox, ButtonStart, StarIcon,ButtonAnswer, WrapperAnswer
} from './questionStyle'
import Img from'../../asset/img'


class Question extends Component {
  constructor(props) {
    super(props);
      this.setState ={
        
      }
  }

  


  render() {
    return (
        <Wrapper>
            
              
              <Row>
               <TitleField>Index :</TitleField>
                 {
                   this.props.index
                 }
             </Row>
             <Row>
               <TitleField>Content: </TitleField>
                 {
                   this.props.content
                 }
             </Row>
             <Row>
               <TitleField>Answer: </TitleField>
                 <WrapperAnswer>
                 
                    <Row>
                        <ButtonAnswer type="radio" name={this.props.index} value={this.props.answerA}/>
                        {
                            this.props.answerA
                        }
                    </Row>
                    <Row>
                        <ButtonAnswer type="radio" name={this.props.index} value={this.props.answerB}/>
                        {
                            this.props.answerB
                        }
                    </Row>
                    <Row>
                        <ButtonAnswer type="radio" name={this.props.index} value={this.props.answerC}/>
                        {
                            this.props.answerC
                        }
                    </Row>
                    <Row>
                        <ButtonAnswer type="radio" name={this.props.index} value={this.props.answerD}/>
                        {
                            this.props.answerD
                        }
                    </Row>
                 </WrapperAnswer>
            </Row>
             
            
            
        </Wrapper>
    )
  }
}

export default Question;