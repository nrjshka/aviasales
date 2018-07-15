import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Card from "./Card";

import navigation from "../../assets/nav.svg";
import edit from "../../assets/edit.svg";
import planet from "../../assets/planet.svg";
import palm from "../../assets/palm.svg";
import shoping from "../../assets/shoping.svg";
import culture from "../../assets/culture.svg";
import wine from "../../assets/wine.svg";
import baby from "../../assets/baby.svg";

const NavWrapper = styled.div`
  padding-bottom: 58px;
  @media only screen and (min-width: 576px) {
    padding-top: 56px;
  }
  @media only screen and (max-width : 575px) {
    padding-top: 40px;
  }
`;

const NavigationImg = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
`;

const TextNav = styled.div`
  text-align: center;

  @media only screen and (min-width: 576px) {
    margin-top: 20px;
    margin-bottom: 51px;
    font-size: 24px;
    line-height: 36px;
  }
  @media only screen and (max-width : 575px) {
    margin-top: 24px;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 24px;
  }

  a {
    color: #00ACE2;
    text-decoration: none;
  }

  img {
    margin-left: 5px;
  }
`

class Nav extends Component {
  render(){
    return(
      <nav>
        <div className="container">
            <NavWrapper className="row">
              <div className="col-xs-12">
                <NavigationImg src={navigation} />
              </div>
              <div className="col-xs-12">
                <TextNav>
                  Популярные направления <br className="hidden-sm hidden-md hidden-lg hidden-xl"/>
                  перелетов <br className="hidden-xs"/> из города <br className="hidden-sm hidden-md hidden-lg hidden-xl"/>
                  <a href={`http://google.com`}>Москва <img src={edit}/> </a>
                </TextNav>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-3 col-xl-offset-3 row">
                <div className="col-xs-4">
                  <Card src={planet} text={[`Куда`, `угодно`]} active={true}/>
                </div>
                <div className="col-xs-4">
                  <Card src={palm} text={[`Солнце`, `и море`]} active={false}/>
                </div>
                <div className="col-xs-4">
                  <Card src={shoping} text={[`Шопинг,`, `город`]} active={false}/>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-xl-3 row">
                <div className="col-xs-4">
                  <Card src={culture} text={[`Культура`, `и история`]} active={false}/>
                </div>
                <div className="col-xs-4">
                  <Card src={wine} text={[`Ночная`, `жизнь`]} active={false}/>
                </div>
                <div className="col-xs-4">
                  <Card src={baby} text={[`Отдых`, `с детьми`]} active={false}/>
                </div>
              </div>
            </NavWrapper>
        </div>
      </nav>
    )
  }
}

export default Nav;