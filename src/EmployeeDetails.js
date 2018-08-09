import React from 'react';
import { TextField, Paper, TableRow, TableCell, TableBody, Table } from '@material-ui/core';
import calculateDeductionFromName from './CalcUtil';

const EMP_DEDUCTABLE = 1000;

export default class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            empName: '',
            empPhoneNum: '',
            salary: 2000,
            deductable: 0
        }
    }

    onChange = ({ target: { name, value } }) => {
        let newState = {};
        name === 'empName' ? newState.deductable = calculateDeductionFromName({name:value,cost:EMP_DEDUCTABLE}) : void 0;
        newState[name] = value;
        this.setState(newState);
    }

    componentDidUpdate(prevProps, prevState) {
        prevState.deductable !== this.state.deductable ? this.props.onEmpDeductableChange(this.state.deductable) : void 0;
    }

    render() {
        return (
            <React.Fragment>
                <Paper className="paper-size paper-padding">
                    <div className="App-text-align-left"><b>Employee Details</b></div>
                    <Table >
                        <TableBody style={{ boarder: 0 }}>
                            <TableRow style={{ boarder: 0 }}>
                                <TableCell >Id</TableCell>
                                <TableCell ><TextField required name='empId' value={this.state.empId} onChange={this.onChange} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Name</TableCell>
                                <TableCell ><TextField name='empName' value={this.state.empFirstName} onChange={this.onChange} pattern="[A-Za-z]{3}" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Phone</TableCell>
                                <TableCell ><TextField name='empPhoneNum' value={this.state.empPhoneNum} onChange={this.onChange} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Salary (per paycheck)</TableCell>
                                <TableCell >{this.state.salary}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Deductable (year)</TableCell>
                                <TableCell >{this.state.deductable}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </Paper>
                <br />
            </React.Fragment>
        );
    }
}