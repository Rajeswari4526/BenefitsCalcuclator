import React from 'react';
import Dependent from './Dependent';

export default class DependentDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            dependents : []
        }
    }
    onDelete = (e) => {    
        const {dependents} = Object.assign({}, this.state);
        dependents.splice(e.target.value, 1);
        this.setState({dependents});
    }
    onAdd = (e) => {
        const {dependents} = Object.assign({}, this.state);
        dependents.push({
            firstName: '',
            lastName: '',
            cost: 0
        });
        this.setState({dependents});
    }
    onChange = ({index, property, value}) => {
        const {dependents} = Object.assign({}, this.state);        
        dependents[index][property] = value;
        const {firstName} = dependents[index];
        dependents[index]['cost'] = firstName ? (firstName[0] === 'A' ? 450 : 500) : 0;
        this.setState({dependents});
    }
    render () {
       const { classes } = this.props  || {};
       let totalDeductable = this.props.empDeductable;
        return (            
            <React.Fragment>
                <React.Fragment>
                    Dependent Details
                </React.Fragment>
                {                     
                    this.state.dependents.map((dependent,index) => {
                        totalDeductable += dependent['cost']
                        return <Dependent {...dependent} index = {index} onDelete={this.onDelete} onChange = {this.onChange} />
                    } )
                }
                <button name='addDependents' onClick={this.onAdd}>Add</button>
                <div>
                    <b>Per Pay Period</b>
                    <br />
                    Salary: {this.props.empSalary}
                    Deductable: {totalDeductable/26}
                    Net Salay: {this.props.empSalary - (totalDeductable/26) }
                </div>
                <br />
                <div>
                    <b>Per Year</b>
                    <br />
                    Salary: {this.props.empSalary*26}
                    Deductable: {totalDeductable}
                    Net Salay: {(this.props.empSalary*26) - totalDeductable }
                </div>
            </React.Fragment>
        );
    }
}