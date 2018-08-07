import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BenefitsCalcForm from './BenefitsCalcForm';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (      
      <React.Fragment>
        <CssBaseline />
          <BenefitsCalcForm />
      </React.Fragment>
    );
  }
}

export default App;
