import React from 'react';
import PropTypes from 'prop-types';
import { Paper, TableRow, TableHead, TableCell, TableBody, Table } from '@material-ui/core';

const PAYCHECKS_PER_YEAR = 26;

const BenefitsSummary = ({ empSalary, empDeductable, dependentsDeductable }) => {
    const totalDeductable = empDeductable + dependentsDeductable;
    return <Paper className="paper-size paper-padding">
    <div className="App-text-align-left"><b>Benefits Summary</b></div>
        <Table  >
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell numeric>Paycheck</TableCell>
                    <TableCell numeric> Yearly</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Salary</TableCell>
                    <TableCell numeric>{empSalary}</TableCell>
                    <TableCell numeric>{empSalary * PAYCHECKS_PER_YEAR}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Deductions</b></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="left-margin">Employee</TableCell>
                    <TableCell numeric>-{(empDeductable / PAYCHECKS_PER_YEAR).toFixed(2)}</TableCell>
                    <TableCell numeric>-{empDeductable.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="left-margin">Dependents</TableCell>
                    <TableCell numeric>-{(dependentsDeductable / PAYCHECKS_PER_YEAR).toFixed(2)}</TableCell>
                    <TableCell numeric>-{dependentsDeductable.toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Net Salary</b></TableCell>
                    <TableCell numeric><b>{empSalary - ((empDeductable / PAYCHECKS_PER_YEAR).toFixed(2)) - ((dependentsDeductable / PAYCHECKS_PER_YEAR).toFixed(2))}</b></TableCell>
                    <TableCell numeric><b>{((empSalary * PAYCHECKS_PER_YEAR) - totalDeductable).toFixed(2)}</b></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>
}

BenefitsSummary.propTypes = {
    empSalary: PropTypes.number.required,
    empDeductable: PropTypes.number.required,
    dependentsDeductable: PropTypes.number.required
}

export default BenefitsSummary;