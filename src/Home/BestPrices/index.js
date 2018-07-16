import React, { Component } from 'react';
import styled from 'styled-components';

import best_price from "../../assets/best_price.svg";
import russia from "../../assets/russia.svg";

import Card from "./Card";

const PageWrapper = styled.div`
  padding-top: 32px;

  @media only screen and (min-width: 1201px) {
    .col-xl-4 {
      padding-left: 60px;
      padding-right: 60px;
    }
  }
`;

const PriceImg = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
  padding-bottom: 20px;
`;

const PriceText = styled.h1`
  color: #4A4A4A;
  font-weight: 500;
  text-align: center;

  @media only screen and (min-width: 1201px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 1200px) {
    padding-bottom: 60px;
    font-size: 24px;
    line-height: 36px;
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 40px
    font-size: 18px;
    line-height: 24px;
  }
`;

const PriceDescription = styled.div`
  text-align: center;
  color: #4A4A4A;
  font-size: 16px;   
  line-height: 24px;
  @media only screen and (min-width: 1201px) {
    padding-top: 60px;
  }
`;

const PriceDescriptionLow = styled.div`
  padding-top: 24px;
  text-align: center;
  color: #A0B0B9;
  font-size: 14px;
  line-height: 20px;
  @media only screen and (min-width: 1201px) {
    padding-top: 16px;
  }
`;

class BestPrices extends Component {
  render(){
    return(
      <PageWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <PriceImg src={best_price} />
            </div>
            <div className="col-xs-12">
              <PriceText>
                Лучшие цены на авиабилеты<br className="hidden-md hidden-lg hidden-xl"/> за последний месяц
              </PriceText>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-3 col-xl-offset-1">
              <Card 
                countryImg={russia}
                cityName={`Симферополь (Крым)`}
                placeName={`Крым`}
                from={[
                  {name : "Москвы", value: "4 813"},
                  {name : "Санкт-Петербурга", value: "7 857"},
                  {name : "Новосибирска", value: "15 127"},
                  {name : "Екатеринбурга", value: "9 275"},
                  {name : "Челябинска", value: "9 148"}
                ]}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-4">
              <Card 
                countryImg={russia}
                cityName={`Ереван`}
                placeName={`Армения`}
                from={[
                  {name : "Москвы", value: "6 758"},
                  {name : "Санкт-Петербурга", value: "9 932"},
                  {name : "Сочи", value: "11 951"},
                  {name : "Краснодара", value: "11 741"},
                  {name : "Ростова-на-Дону", value: "11 956"}
                ]}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-3">
              <Card 
                countryImg={russia}
                cityName={`Кишенёв`}
                placeName={`Молдавия`}
                from={[
                  {name : "Москвы", value: "8 319"},
                  {name : "Санкт-Петербурга", value: "10 800"},
                  {name : "Краснодара", value: "12 098"},
                  {name : "Сургута", value: "16 277"},
                  {name : "Нового Уренгоя", value: "15 987"}
                ]}
              />
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-xl-6 col-xl-offset-3">
                <PriceDescription>
                  Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
                  стран мира. Поиск и сравнение цен
                  на авиабилеты среди 100 агентств 
                  и 728 авиакомпаний.
                </PriceDescription>
            </div>
            <div className="col-xs-12">
                <PriceDescriptionLow>
                  Цены, найденные пользователями 
                  за последние 48 часов, не являются офертой.
                </PriceDescriptionLow>
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

export default BestPrices;