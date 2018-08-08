import React from 'react';
import PropTypes from 'prop-types';

const Dependent = props =>
    <div>
        <input placeholder='first Name' value = {props.firstName} onChange = {e => {props.onChange({index: props.index, property: 'firstName', value: e.target.value}) }} />
        <input placeholder='last Name' value = {props.lastName} onChange = {e => {props.onChange({index: props.index, property: 'lastName', value: e.target.value}) }} />
        <button onClick = {props.onDelete} name='delete' value={props.index}>Delete</button>    
    </div>;
Dependent.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onChange: PropTypes.func,
    index: PropTypes.int,
    onDelete: PropTypes.func
}
export default Dependent;
