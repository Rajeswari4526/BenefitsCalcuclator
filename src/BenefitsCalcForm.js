import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import './App.css';

export default class BenefitsCalcForm extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Benefits Calculator</h1>
                </header>
                <p className="App-intro">
                    Enter employee details and dependent details to caculate benefits package
                </p>
                <EmployeeDetails />
                <p className="App-intro">
                    *** Employee receives 26 pay checks per year.
                </p>
            </div>
        );
    }
}