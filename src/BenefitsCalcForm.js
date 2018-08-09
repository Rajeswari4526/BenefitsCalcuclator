import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import DependentDetails from './DependentDetails';
import BenefitsSummary from './BenefitsSummary';

const EMP_SALARY = 2000;

export default class BenefitsCalcForm extends React.Component {
    constructor() {
        super();
        this.state = {
            empSalary: EMP_SALARY,
            empDeductable: 0,
            dependentsDeductable: 0
        }
    }
    onEmpDeductableChange = (newDeductable) => {
        this.setState({ empDeductable: newDeductable });
    }
    onDependentDeductableChange = (newDeductable) => {
        this.setState({ dependentsDeductable: newDeductable });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Paylocity Benefits Calculator</h1>
                </header>
                <br/>
                <EmployeeDetails onEmpDeductableChange={this.onEmpDeductableChange} />
                {
                    (this.state.empDeductable > 0)
                    &&
                    <React.Fragment>
                        <DependentDetails onDependentDeductableChange={this.onDependentDeductableChange} />
                        <BenefitsSummary empSalary={this.state.empSalary} empDeductable={this.state.empDeductable} dependentsDeductable={this.state.dependentsDeductable} />
                    </React.Fragment>
                }
                <p className="App-intro">
                    Note: Employee receives 26 pay checks per year.
                </p>
            </div>
        );
    }
}