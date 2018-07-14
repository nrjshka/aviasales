import React, { Component } from 'react';
import styled from 'styled-components';

import arrow from "../../assets/arrow.svg";

import { HeaderInput, PlaceInput } from './home';

const PlaceInputWithMoveBtn = styled(HeaderInput)`
  border-top-left-radius: 3px;

  @media only screen and (min-width: 1201px) {
    border-bottom-left-radius: 3px;
  }
  @media only screen and (max-width: 575px) {
    border-top-right-radius: 3px;
  }

  span {
    color: #A0B0B9;
    padding-right: 11px;
  }
`;

const PlaceInputWithOutMoveBtn = styled(HeaderInput)`
  border-top-right-radius: 3px;
`;

class SetPlace extends Component {
  render() {
    if (this.props.withMoveBtn) {      
      return (
        <PlaceInputWithMoveBtn>
          <PlaceInput defaultValue={this.props.defaultValue} width={`calc(100% - 80px)`} placeholder={this.props.placeholder}/>
          <span>{this.props.shortCut}</span> 
          <img src={arrow}/>            
        </PlaceInputWithMoveBtn>     
          );
    }else {
      return (
        <PlaceInputWithOutMoveBtn>
          <PlaceInput defaultValue={this.props.defaultValue} width={`100%`} placeholder={this.props.placeholder} />
        </PlaceInputWithOutMoveBtn>
      );
    }
  }
}

export default SetPlace;