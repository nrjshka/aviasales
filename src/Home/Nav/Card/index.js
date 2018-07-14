import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  margin-bottom: 21px;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.active ? "#5C5C5C" : "#00ACE2"}
 
  div {
    margin-bottom: 5px;
  }
`;

const CardImg = styled.img`
  width: 65px;
  height: 65px;
`;

const BlueStick = styled.div`
  width: 60px;
  height: 1px;
  background-color: #00ACE2;
  margin: 0 auto;
`;


class Card extends Component {
  render() { 
    return (
      <CardContainer active={this.props.active}>
        <CardImg src={this.props.src} />
        {this.props.text.map( (val, i) => {
          return (
            <div key={i}>
              {val}
            </div>
          );
        })}
        {this.props.active && <BlueStick />}
      </CardContainer>
        );
    }
}

export default Card;