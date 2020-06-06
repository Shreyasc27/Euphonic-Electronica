import TagManager from 'react-gtm-module'

import React from 'react';
import AppNavbar from './components/AppNavbar';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EntryDetails from './components/EntryDetails';

const tagManagerArgs = {
  gtmId: 'GTM-168761615'
};

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <Provider store={ store }>
    <div className="App">
      <AppNavbar/>
      <Container>
        <BrowserRouter>
          <EntryDetails/>
        </BrowserRouter>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
