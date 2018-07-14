import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Header from "./Header";

class Home extends Component {
  render(){
    return(
      <div>
        <Helmet>
          Aviasales
        </Helmet>
        <Header />
      </div>
    )
  }
}

export default Home;