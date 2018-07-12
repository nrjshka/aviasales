import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ruLocaleData from 'react-intl/locale-data/ru';
import styled from 'styled-components';

import Home from "./Home";

addLocaleData(ruLocaleData);

class App extends Component {
  render() {      
    return (
      <IntlProvider locale="ru">
        <div>
          <Helmet>
            Aviasosales
          </Helmet>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>          
      </IntlProvider>
        );
    }
}

export default App;