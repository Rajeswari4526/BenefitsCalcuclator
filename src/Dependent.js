import React from 'react';

export default class Dependent extends React.Component {
    constructor () {
        super();
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    render () {
        const {firstName , lastName , index, onDelete, onChange} = this.props;
        return (
            <div>
                <input placeholder='first Name' value = {this.state.firstName} onChange = {onChange} name = 'first name'/>
                <input placeholder='last Name' value = {this.state.lastName} onChange = {onChange}/>
                <button onClick = {onDelete} name='delete' value={index}>Delete</button>    
            </div>
        );
    }
}