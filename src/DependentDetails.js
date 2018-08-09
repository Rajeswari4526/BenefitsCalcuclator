import React from 'react';
import { Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import Dependent from './Dependent';
import './App.css';
import BenefitsSummary from './BenefitsSummary';

export default class DependentDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            dependents: []
        }
    }
    onDelete = (e) => {
        const { dependents } = Object.assign({}, this.state);
        dependents.splice(e.target.value, 1);
        this.setState({ dependents });
    }
    onAdd = () => {
        const { dependents } = Object.assign({}, this.state);
        dependents.push({
            name: '',
            cost: 0
        });
        this.setState({ dependents });
    }
    onChange = ({ index, value }) => {
        const { dependents } = Object.assign({}, this.state);
        dependents[index]['name'] = value;
        const { name } = dependents[index];
        dependents[index]['cost'] = name ? (name[0] === 'A' ? 450 : 500) : 0;
        this.setState({ dependents });
    }
    render() {  
        let totalDependentDeductable = 0;
        return (
            <React.Fragment>
                <Paper className="paper-size paper-padding">
                <div className="App-text-align-left"><b>Dependent Details</b></div>
                <Table  >
                    <TableHead>
                        <TableRow>
                            <TableCell>Dependent Name</TableCell>
                            <TableCell numeric>Deductable (year)</TableCell>
                            <TableCell ></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.dependents.map((dependent, index) => {
                            totalDependentDeductable += dependent['cost']
                            return (
                                <Dependent {...dependent} index={index} onDelete={this.onDelete} onChange={this.onChange} />
                            );
                        })}
                        <TableRow key="total">
                            <TableCell>Total</TableCell>
                            <TableCell numeric>{totalDependentDeductable}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <br />
                <button name='addDependents' onClick={this.onAdd}>Add Dependents</button>
                </Paper>
                <br/>
                <BenefitsSummary empSalary={this.props.empSalary} empDeductable={this.props.empDeductable} dependentsDeductable={totalDependentDeductable} />                
            </React.Fragment>
        );
    }
}