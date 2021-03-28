import React , { Component } from 'react';
import{
  TitleField,
  Wrapper, Row, Column, StarIcon, Wrapper_plus
} from './headerTestScrStyle'
import Img from'../../asset/img'


class HeaderTestScr extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id : window.localStorage.getItem('exampleId'),
        name: window.localStorage.getItem('exampleName'),
        point: window.localStorage.getItem('examplePoint'),
        time: window.localStorage.getItem('exampleTime'),
        diff: window.localStorage.getItem('exampleDiff'),
      } 
      // console.log("window",window.localStorage)
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
        <Wrapper_plus>
            <Wrapper>
                <Column >
                
                <Row>
                <TitleField>Name:</TitleField>
                    {
                    this.state.name
                    }
                </Row>
                <Row>
                <TitleField>Point: </TitleField>
                    {
                    this.state.point
                    }
                </Row>
                <Row>
                <TitleField>Time: </TitleField>
                    {
                    this.state.time
                    }
                </Row>
                <Row>
                <TitleField>Diff: </TitleField>
                    {this.renderStar(this.state.diff)}
                </Row>
                </Column>
                
            </Wrapper>
        
        </Wrapper_plus>
    )
  }
}

export default HeaderTestScr;