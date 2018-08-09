import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';

const Dependent = props =>
    // <div>
    //     <input placeholder='name' value = {props.name} onChange = {e => {props.onChange({index: props.index, value: e.target.value}) }} />
    //     {/* <input placeholder='last Name' value = {props.lastName} onChange = {e => {props.onChange({index: props.index, property: 'lastName', value: e.target.value}) }} /> */}
    //     <input value = {props.cost} />
    //     <button onClick = {props.onDelete} name='delete' value={props.index}>Delete</button>    
    // </div>;
    <TableRow key={props.index}>
        <TableCell component="th" scope="row">
            <input placeholder='name' value={props.name} onChange={e => { props.onChange({ index: props.index, value: e.target.value }) }} />
        </TableCell>
        <TableCell numeric> {props.cost}</TableCell>
        <TableCell >  <button onClick={props.onDelete} name='delete' value={props.index}>Delete</button>    </TableCell>
    </TableRow>
Dependent.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    index: PropTypes.int,
    onDelete: PropTypes.func,
    cost: PropTypes.number
}
export default Dependent;
