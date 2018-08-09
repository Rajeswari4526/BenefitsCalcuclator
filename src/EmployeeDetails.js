import React from 'react';
import { TextField, Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';
import DependentDetails from './DependentDetails';
import './App.css';

export default class EmployeeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            empName: '',
            empPhoneNum: '',
            salary: 2000,
            deductable: 1000
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Paper className="paper-size">
                    <div className="App-text-align-left title-left-margin"><b>Employee Details</b></div>
                    
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
                        <TableBody style={{boarder:0}}>
                                    <TableRow style={{boarder:0}}>
                                        <TableCell >Id</TableCell>
                                        <TableCell ><TextField required  name='empId' value={this.state.empId} onChange={this.change} /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Name</TableCell>
                                        <TableCell ><TextField  name='empName' value={this.state.empFirstName} onChange={this.change} /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Phone</TableCell>
                                        <TableCell ><TextField  name='empPhoneNum' value={this.state.empPhoneNum} onChange={this.change} /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Salary</TableCell>
                                        <TableCell ><TextField name='salary' value={this.state.salary} onChange={this.change} /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >Deductable (year)</TableCell>
                                        <TableCell ><TextField name='deductable' value={this.state.deductable} onChange={this.change} /></TableCell>
                                    </TableRow>
                        </TableBody>
                    </Table>

                </Paper>    
                <br />
                {
                    this.state.empId
                        ?
                        <DependentDetails empSalary={this.state.salary} empDeductable={this.state.deductable} />
                        : null
                }
            </React.Fragment>
        );
    }
}