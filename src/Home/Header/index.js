import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo';
import { ActionButton } from '../../common/elements/home';
import SetPlace from '../../common/elements/setplace';
import SetDate from '../../common/elements/setdate';
import SetParams from '../../common/elements/setparams';

import aero from "../../assets/aero.svg";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 0;
  margin-left: 0;
  padding-right: 0;
  margin-right: 0;

  @media only screen and (min-width: 1201px) {
    margin-top: 215px;
    margin-bottom: 254px;

    .no-padding {
      padding: 0 1px !important;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 83px;
    margin-bottom: 122px;

    .no-padding {
      padding: 0 1px !important;
    }
  }
  @media only screen and (max-width : 575px) {
    margin-top: 47px;
    margin-bottom: 88px;

    .no-padding {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
  }
`;

const HomeHeader = styled.header`
  width : 100%;
  background : linear-gradient(to right, #00B0DE, #196EBD);
  padding-top : 12px; 
`;

const HeaderTitle = styled.h1`
  width: 100%;
  color: #fff;
  font-weight: 600;
  text-align: center;

  @media only screen and (min-width: 1201px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 20px;
    line-height: 23px;
  }
`;

const HeaderSecontTitle = styled.h1`
  text-align: center;
  fon-weight: 600;
  color: #fff;

  @media only screen and (min-width: 1201px) {
    margin-top: 0;
    margin-bottom: 45px;
    font-size: 24px;
    line-height: 28px;
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 23px;
  }
`;

const HeaderActionButton = styled(ActionButton)`
  @media only screen and (min-width: 1201px) {
    margin-top: 45px;
  }
  @media only screen and (max-width: 1200px) {
    margin-top: 16px;
  }
`;

const AeroImg = styled.img`
  width: 26px;
  height: 21px;
  margin-left: 16px;
  vertical-align: middle;
`;


class Header extends Component {
  render(){
    return(
      <HomeHeader>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Logo />
            </div>
            <HeaderWrapper className="col-xl-12 col-sm-12 row">
              <HeaderTitle>
                Поиск дешевых авиабилетов
              </HeaderTitle>
              <HeaderSecontTitle className="hidden-xs col-sm-12">
                Лучший способ купить авиабилеты дешево
              </HeaderSecontTitle>

              <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-xl-offset-1 col-xl-2 no-padding">
                <SetPlace withMoveBtn={true} shortCut={`MOW`} dValue={`Москва`} pholder={`Откуда`} />
              </div>

              <div className="col-xs-12 col-sm-5 col-xl-2 no-padding">
                <SetPlace withMoveBtn={false} pholder={`Город прибытия`}/>
              </div>
              <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-xl-4 col-xl-offset-0 no-padding">
                <SetDate pholder={`Туда`}/>
                <SetDate pholder={`Обратно`}/>
              </div>
              <div className="col-xs-12 col-sm-5 col-xl-2 no-padding">
                <SetParams />
              </div>
              <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-xl-4 col-xl-offset-4">
                <HeaderActionButton Height={`56px`}>
                  Найти билеты
                  <AeroImg src={aero} />
                </HeaderActionButton>
              </div>
            </HeaderWrapper>
          </div>
        </div>
      </HomeHeader>
    )
  }
}

export default Header;