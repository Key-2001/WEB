import React , { Component } from 'react';
import {
    InputSearch,
    Wrapper,ButtonGoto, Branch ,Select
} from './headerStyle'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord:'',
    }
  }

  render() {
    return (
        <Wrapper>
            <InputSearch
                value={this.state.keyWord}
                text="text"
                onChange={(event)=>this.setState({keyWord:this.state.onChange})}
                placeholder="Search.."
            />
            <ButtonGoto>Go to</ButtonGoto>
            <Branch></Branch>
            <Select >
                <option value="Name">Name</option>
                <option value="Time">Time</option>
                <option value="Point">Point</option>
            </Select>
        </Wrapper>
    )
  }
}

export default Header;
