import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from "./Header";
import Nav from "./Nav";
import CityContainer from "./CityContainer";
import BestPrices from "./BestPrices";

class Home extends Component {
  render(){
    return(
      <div>
        <Helmet>
          Aviasales
        </Helmet>
        <Header />
        <Nav />
        <CityContainer />
        <BestPrices />
      </div>
    )
  }
}

export default Home;