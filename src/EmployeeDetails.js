import React from 'react';
import { TextField, Paper, TableRow, TableCell, TableBody, Table } from '@material-ui/core';

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
        name == 'empName' ? newState.deductable = (value ? (value[0] === 'A' ? 900 : 1000) : 0) : void 0;
        newState[name] = value;
        this.setState(newState);
    }

    componentDidUpdate(prevProps, prevState) {
        prevState.salary !== this.state.salary ? this.props.onEmpSalaryChange(this.state.salary) : void 0;
        prevState.deductable !== this.state.deductable ? this.props.onEmpDeductableChange(this.state.deductable) : void 0;
    }

    render() {
        return (
            <React.Fragment>
                <Paper className="paper-size paper-padding">
                    <div className="App-text-align-left"><b>Employee Details</b></div>

                    {/* <span className="left-margin">
                        <TextField placeholder='Email' name='empEmail' value={this.state.empEmail} onChange={this.change} />
                    </span>
                    <br />
                    <TextField placeholder='First Name' name='empFirstName' value={this.state.empFirstName} onChange={this.change} />
                    <span className="left-margin">
                        <TextField placeholder='Last Name' name='empLastName' value={this.state.empLastName} onChange={this.change} />
                    </span>
                    <br />
                    <TextField placeholder='Phone num' name='empPhoneNum' value={this.state.empPhoneNum} onChange={this.change} />
                    <span className="left-margin">
                        <TextField placeholder='Address' name='empAddress' value={this.state.empAddress} onChange={this.change} />
                    </span>
                    <br />
                    <TextField name='salary' value={this.state.salary} onChange={this.change} />
                    <span className="left-margin">
                        <TextField name='deductable' value={this.state.deductable} onChange={this.change} />
                    </span>
                    <br /> */}
                    <Table >
                        <TableBody style={{ boarder: 0 }}>
                            <TableRow style={{ boarder: 0 }}>
                                <TableCell >Id</TableCell>
                                <TableCell ><TextField required name='empId' value={this.state.empId} onChange={this.onChange} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Name</TableCell>
                                <TableCell ><TextField name='empName' value={this.state.empFirstName} onChange={this.onChange} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Phone</TableCell>
                                <TableCell ><TextField name='empPhoneNum' value={this.state.empPhoneNum} onChange={this.onChange} /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Salary</TableCell>
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