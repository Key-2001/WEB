import React , { Component } from 'react';
import {
    Wrapper,Avatar,TextField,Blank,ButtonLogout,
} from './leftMenuStyle'
import Img from '../../asset/img/avatarDefault.jpg'
import Avatarr from'../../asset/img/Avatar.jpg'

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <Wrapper id="LeftMenu">
            <Avatar src={Img} alt="AvatarDefault"/>
            <TextField>UserName</TextField>
            <TextField>Point: 2430</TextField>
            <TextField>Test complete: 29</TextField>
            <TextField>Test not complete: 42</TextField>
            <Blank></Blank>
            <ButtonLogout>Log Out</ButtonLogout>
        </Wrapper>
            
    )
  }
}

export default LeftMenu;
