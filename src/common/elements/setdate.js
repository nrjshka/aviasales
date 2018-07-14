import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderInput, PlaceInput } from './home';

import calendar from "../../assets/calendar.svg";

const SetDateInput = styled(HeaderInput)`
  width: calc( 50% - 1px);
  display: inline-block;
  :first-child {
    margin-right: 2px;
  }

  @media only screen and (max-width: 1200px) {
    :first-child {
      border-bottom-left-radius: 3px;
    }
  }
  @media only screen and (max-width: 575px) {
    border-radius: 0;
  }
`;


class SetDate extends Component {
  render() {
    return(
      <SetDateInput>
        <PlaceInput placeholder={this.props.placeholder} width={`calc(100% - 25px)`} />
        <img src={calendar} />
      </SetDateInput>
    );
  }
}

export default SetDate;