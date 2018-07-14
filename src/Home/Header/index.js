import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo';
import SetPlace from '../../common/elements/setplace';

const HomeHeader = styled.header`
  width : 100%;
  background : linear-gradient(to right, #00B0DE, #196EBD);
  padding-top : 12px; 
`;

const HeaderTitle = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;
  padding-top: 47px;
  text-align: center;
`;


class Header extends Component {
  render(){
    return(
      <HomeHeader className="container">
        <div className="row">
          <div className="col-xs-12">
            <Logo />
          </div>
          <HeaderTitle>
            Поиск дешевых авиабилетов
          </HeaderTitle>
          <div className="hidden-xs">
            Лучший способ купить авиабилеты дешево
          </div>

          <div className="col-xs-12">
            <SetPlace withMoveBtn={true} dValue={`Москва`}/>
          </div>

          <div className="col-xs-12">
            <SetPlace withMoveBtn={false} pholder={`Город прибытия`}/>
          </div>
          <button>
            Туда
            <img />
          </button>
          <button>
            Туда
            <img />
          </button>
          <div className="">
            1 пассажир, <span>эноком</span>
            <img />
            <div className="hidden-xs">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <button>
            Найти билеты
            <img />
          </button>
        </div>
      </HomeHeader>
    )
  }
}

export default Header;