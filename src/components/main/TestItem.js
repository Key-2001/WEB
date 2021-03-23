import React , { Component } from 'react';
import{
  TitleField,
  Wrapper, Row, Column, Checkbox, ButtonStart, StarIcon
} from './testItemStyle'
import Img from'../../asset/Img'


class TestItem extends Component {
  constructor(props) {
    super(props);
  }

  renderStar(number){
    const Stars=[];
    for(let i=0;i<number;i++)
    {
      const icon = <StarIcon src={Img.star}/>
      Stars.push(icon);
    }
    return(
      <div>{Stars}</div>
    )

  }


  render() {
    return (
        <Wrapper>
            <Column width="70%">
              
              <Row>
               <TitleField>Name:</TitleField>
                 {
                   this.props.name
                 }
             </Row>
             <Row>
               <TitleField>Point: </TitleField>
                 {
                   this.props.point
                 }
             </Row>
             <Row>
               <TitleField>Time: </TitleField>
                 {
                   this.props.time
                 }
             </Row>
             <Row>
               <TitleField>Diff: </TitleField>
                 {this.renderStar(this.props.diff)}
             </Row>
             <Row>
               <TitleField>Past: </TitleField>
                 {
                   <Checkbox type ="checkbox" checked= {this.props.past}/>
                 }
             </Row>
             
            </Column>
            <Column width="30%">
                 <ButtonStart>Start</ButtonStart>
            </Column>
        </Wrapper>
    )
  }
}

export default TestItem;