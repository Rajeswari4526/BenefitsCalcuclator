import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import DependentDetails from './DependentDetails';

export default class BenefitsCalcForm extends React.Component{
    render() {
        return (            
            <div>
                <EmployeeDetails />
                <DependentDetails classes={{icon: {margin: 20}}}/>
            </div>
        );
    }
}