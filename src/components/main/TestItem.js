import React , { Component } from 'react';
import{
  TitleField,
  Wrapper, Row
} from './testItemStyle'



class TestItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Wrapper>
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
                  {
                    this.props.diff
                  }
              </Row>
              <Row>
                <TitleField>Past: </TitleField>
                  {
                    <input type ="checkbox" checked= {this.props.past}/>
                  }
              </Row>
              
        </Wrapper>
    )
  }
}

export default TestItem;