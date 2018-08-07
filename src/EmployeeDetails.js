import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class EmployeeDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            empId: '',
            empFirstName: '',
            empLastName: '',
            empEmail: '',
            empPhoneNum: '',
            empAddress: ''
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
                id="required"
                label="Required"
                defaultValue='Employee Id' 
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
            </div>
        );
    }
}