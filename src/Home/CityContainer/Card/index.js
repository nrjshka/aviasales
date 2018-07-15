import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  margin-bottom: 25px;
`;

const Img = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;

  @media only screen and (min-width: 1201px) {
    background: url(${props => props.image_h});
    height: 211px;
  }
  @media only screen and (max-width: 1200px) {
    background: url(${props => props.image_h});
    height: 335px;
  }
  @media only screen and (max-width: 767px) {
    background: url(${props => props.image_l});
    height: 176px;
  }
`;

const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  @media only screen and (min-width: 1201px) {
    padding: 0 16px;
    padding-top: 12px;
    padding-bottom: 16px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 0 16px;
    padding-top: 12px;
    padding-bottom: 16px;
  }
  @media only screen and (max-width: 575px) {
    padding: 0 16px;
    padding-top: 16px;
    padding-bottom: 12px;
  }
`;

const CardBlock = styled.div`
  display: flex;
  width: 50%;
`;

const LeftBlock = styled(CardBlock)`
  display: flex;
  text-align: left;
`;

const RightBlock = styled(CardBlock)`
  * {width: 100%; text-align: right;}
  
  div {
    width: 100%;
  }
`;

const CountryImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 18px;
`;

const CountryBlock = styled.div`
  @media only screen and (min-width: 576px) {
    width: calc(100% - 50px);
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

const CityName = styled.div`
  color: #5B5B5C;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
  @media only screen and (min-width: 576px) {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 2px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 4px;
  }
`;

const CountryName = styled.div`
  color: #A0B0B9;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
`;

const ValuePrice = styled.div`
  color: #00BAE8;
  @media only screen and (min-width: 576px) {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 2px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 5px;
  }
`;

const DateTime = styled.div`
  color: #A0B0B9;
  font-size: 12px;
  line-height: 20px;
`;

class Card extends Component {
  render(){
    return(
      <Container>
        <Img image_l={this.props.image_l} image_h={this.props.image_h}/>
        <Content>
          <LeftBlock>
            <CountryImg className="hidden-xs" src={this.props.countryImg}/>
            <CountryBlock>
              <CityName>{this.props.cityName}</CityName>
              <CountryName>{this.props.countryName}</CountryName>
            </CountryBlock>
          </LeftBlock>
          <RightBlock>
            <div>
              <ValuePrice>Найти от {this.props.startValue} ₽</ValuePrice>
              <DateTime>{this.props.date}</DateTime>
            </div>
          </RightBlock>
        </Content>
      </Container>
    )
  }
}

export default Card;