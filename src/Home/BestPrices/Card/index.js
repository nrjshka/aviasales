import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 24px;
  border-top: dashed 1.4px #AFBEC6;

  @media only screen and (min-width: 1201px) {
    border-top: none;
  }
`;

const CountryData = styled.div`
  display: flex;
  margin-bottom: 24px;

  div {
    width: calc( 100% - 35px);
  }
`;

const CountryImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const CityName = styled.h1`
  display: block;
  color: #5B5B5C;
  font-size: 22px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 2px;
`;

const PlaceName = styled.div`
  text-transform: uppercase;
  color: #A0B0B9;
  font-size: 12px;
  line-height: 20px;
`;

const TextLabel = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const CityLabel = styled.div`
  width: 60%;
  text-align: left;
  color: #4A4A4A;
  font-size: 16px;
  line-height: 20px;
`;

const PriceLabel = styled.div`
  width: 40%;
  text-align: right;
  color: #00BAE8;
  font-size: 16px;
  line-height: 20px;
`;

class Card extends Component {
  render(){
    return(
      <CardWrapper>
        <CountryData>
          <CountryImg src={this.props.countryImg} />
          <div>
            <CityName>
              {this.props.cityName}
            </CityName>
            <PlaceName>
              {this.props.placeName}
            </PlaceName>
          </div>
        </CountryData>
        {this.props.from.map( (val, i) => {
          return (
            <TextLabel>
              <CityLabel>
                Из {val.name}
              </CityLabel>
              <PriceLabel>
              от {val.value} ₽
            </PriceLabel>
          </TextLabel>
          );
        })}
      </CardWrapper>
    )
  }
}

export default Card;