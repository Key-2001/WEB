import React , { Component } from 'react';
import {
    InputSearch,
    Wrapper,ButtonGoto, Branch ,Select
} from './headerStyle'



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <Wrapper>
            <InputSearch
                value={this.props.keyWord}
                text="text"
                onChange={(event)=>this.props.searchOnChange(event)}
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