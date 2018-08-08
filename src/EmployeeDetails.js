import React from 'react';
import TextField from '@material-ui/core/TextField';
import DependentDetails from './DependentDetails';

export default class EmployeeDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            empId: '',
            empFirstName: '',
            empLastName: '',
            empEmail: '',
            empPhoneNum: '',
            empAddress: '',
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
            <div>
                Employee Details
                <br/>
                <TextField
                required                
                label="Employee Id"                
                name = 'empId'
                value = {this.state.empId}                
                margin="normal"                
                onChange = {this.change}/>
                <input placeholder='Email' 
                name = 'empEmail'
                value = {this.state.empEmail} 
                onChange = {this.change} />
                <br/>
                <input placeholder='First Name' 
                name = 'empFirstName'
                value = {this.state.empFirstName} 
                onChange = {this.change} />
                <input placeholder='Last Name' 
                name = 'empLastName'
                value = {this.state.empLastName} 
                onChange = {this.change} />
                <br/>                
                <input placeholder='Phone num' 
                name = 'empPhoneNum'
                value = {this.state.empPhoneNum} 
                onChange = {this.change} />
                <input placeholder='Address' 
                name = 'empAddress'
                value = {this.state.empAddress} 
                onChange = {this.change} />
                <br/>
                {
                    this.state.empId 
                    ? <DependentDetails empSalary = {this.state.salary} empDeductable = {this.state.deductable}/> : null
                }                
            </div>
        );
    }
}