import React, { Component } from 'react';
import styled from 'styled-components';

import arrow from "../../assets/arrow.svg";

import { HeaderInput, PlaceInput } from './home';

const PlaceInputWithMoveBtn = styled(HeaderInput)`
  border-top-left-radius: 3px;

  @media only screen and (max-width: 575px) {
    border-top-right-radius: 3px;
  }

  span {
    color: #A0B0B9;
    padding-right: 11px;
  }
`;

class SetPlace extends Component {
  render() {
    if (this.props.withMoveBtn) {      
      return (
        <PlaceInputWithMoveBtn>
          <PlaceInput defaultValue={this.props.dValue} />
          <span>MOW</span> 
          <img src={arrow}/>            
        </PlaceInputWithMoveBtn>     
          );
    }else {
      return (
        <HeaderInput>
          <PlaceInput defaultValue={this.props.dValue} isLong={true} placeholder={this.props.pholder}/>
        </HeaderInput>
      );
    }
  }
}

export default SetPlace;