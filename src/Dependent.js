import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Dependent = props =>
    <TableRow key={props.index}>
        <TableCell component="th" scope="row">
            <TextField placeholder='name' value={props.name} onChange={e => { props.onChange({ index: props.index, value: e.target.value }) }} />
        </TableCell>
        <TableCell numeric> {props.cost}</TableCell>
        <TableCell >
            <IconButton aria-label="Delete" onClick={props.onDelete} name='delete' value={props.index}>
                <DeleteIcon />
            </IconButton>
        </TableCell>
    </TableRow>
Dependent.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    index: PropTypes.int,
    onDelete: PropTypes.func,
    cost: PropTypes.number
}
export default Dependent;
