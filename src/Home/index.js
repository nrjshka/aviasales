import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from "./Header";
import Nav from "./Nav";
import CityContainer from "./CityContainer";

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
      </div>
    )
  }
}

export default Home;