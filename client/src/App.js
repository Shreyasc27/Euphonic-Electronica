import ReactGA from 'react-ga';

import React, { useEffect } from 'react';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EntryDetails from './components/EntryDetails';

function App() {

  useEffect(() => {

    ReactGA.initialize('UA-168761615-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, [])

  return (
    <Provider store={ store }>
    <div className="App">
      <AppNavbar/>
      <Container>
        <BrowserRouter>
          <EntryDetails/>
        </BrowserRouter>
      </Container>
      <AppFooter/>
    </div>
    </Provider>
  );
}

export default App;
