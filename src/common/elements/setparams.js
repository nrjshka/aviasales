import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderInput, PlaceInput } from './home';

import shape_close from "../../assets/shape_close.svg";

const DropDownImg = styled.img`
  float: right;
  margin-top: 8px;
`;

const DropDownInput = styled(HeaderInput)`
  @media only screen and (min-width: 1201px) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  @media only screen and (max-width: 1200px) {
    border-bottom-right-radius: 3px;
  }
  @media only screen and (max-width: 575px) {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;

class SetParams extends Component {
  render() {
    return(
      <DropDownInput>
        1 пассажир, <span>эконом</span>
        <DropDownImg src={shape_close} />
        <div className="hidden-xs">
          <ul>
            <li></li>
          </ul>
        </div>
      </DropDownInput>
    );
  }
}

export default SetParams;