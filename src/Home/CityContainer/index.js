import React, { Component } from 'react';
import styled from 'styled-components';

import krasnodar_l from "../../assets/krasnodar_low.png";
import krasnodar_h from "../../assets/krasnodar_h.png";
import soshi_l from "../../assets/soshi_l.png";
import soshi_h from "../../assets/soshi_h.png";
import spb_l from "../../assets/spb_l.png";
import spb_h from "../../assets/spb_h.png";
import mvod_l from "../../assets/mvod_l.png";
import mvod_h from "../../assets/mvod_h.png";
import sim_l from "../../assets/sim_l.png";
import sim_h from "../../assets/sim_h.png";
import bars_l from "../../assets/bars_l.png";
import bars_h from "../../assets/bars_h.png";
import russia from "../../assets/russia.svg";
import spanish from "../../assets/spanish.svg";

import CityCard from "./Card";

const MainWrapper = styled.main`
  @media only screen and (max-width: 767px) {
    .row {
      margin-left: 0;
      margin-right: 0;
    }
    .col-xs-12 {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

class CityContainer extends Component {
  render(){
    return(
      <MainWrapper>
        <div className="container">
          <div className="row ">
            <div className="col-xs-12 col-md-10 col-md-offset-1 row">
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={krasnodar_l} 
                  image_h={krasnodar_h} 
                  cityName={`Краснодар`}
                  countryName={`Россия`}
                  countryImg={russia}
                  startValue={`1 212`}
                  date={`18 марта`}
                  />
              </div>
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={soshi_l} 
                  image_h={soshi_h} 
                  cityName={`Сочи(Адлер)`}
                  countryName={`Россия`}
                  countryImg={russia}
                  startValue={`1 334`}
                  date={`27 марта`}
                  />
              </div>
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={spb_l} 
                  image_h={spb_h} 
                  cityName={`Санкт-Петербург`}
                  countryName={`Россия`}
                  countryImg={russia}
                  startValue={`1 508`}
                  date={`19 февраля`}
                  />
              </div>
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={mvod_l} 
                  image_h={mvod_h} 
                  cityName={`Минеральные Воды`}
                  countryName={`Россия`}
                  countryImg={russia}
                  startValue={`2 074`}
                  date={`13 марта`}
                  />
              </div>
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={sim_l} 
                  image_h={sim_h} 
                  cityName={`Симферополь(Крым)`}
                  countryName={`Россия`}
                  countryImg={russia}
                  startValue={`2 407`}
                  date={`13 марта`}
                  />
              </div>
              <div className="col-xs-12 col-xl-6">
                <CityCard 
                  image_l={bars_l} 
                  image_h={bars_h} 
                  cityName={`Барселона`}
                  countryName={`Испания`}
                  countryImg={spanish}
                  startValue={`4 247`}
                  date={`24 марта`}
                  />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    )
  }
}

export default CityContainer;