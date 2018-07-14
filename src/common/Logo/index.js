import React, { Component } from 'react';
import styled from 'styled-components';

import aviasalesLogo from "../../assets/logo.svg";

const LogoContainer = styled.div`
  display: block;
  width: 139px;
`;

const Img = styled.img`
  display: inline-block;
  width: 29px;
  heigth: 30px;
`;

const Text = styled.div`
  display: inline-block;
  vertical-align: top;
  color: #fff;
  font-size: 20px;
  line-height: 25px;
  padding-left: 12px;
  padding-top: 3px;

  @media only screen and (max-width: 575px) {
    display: none;
  }
`;

class Logo extends Component {
  render() {      
    return (
      <LogoContainer>
        <Img src={aviasalesLogo} />
        <Text>
          aviasales
        </Text>
      </LogoContainer>
        );
    }
}

export default Logo;