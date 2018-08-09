import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

const BenefitsSummary = ({ empSalary, empDeductable, dependentsDeductable }) => {
    const totalDeductable = empDeductable + dependentsDeductable
    return <Paper className="paper-size">
        <div className="top-margin">
            <b>Per Pay Period</b>
            <br />
            Salary: {empSalary}
            Deductable: {(totalDeductable / 26).toFixed(2)}
            Net Salay: {empSalary - (totalDeductable / 26).toFixed(2)}
        </div>
        <br />
        <div className="top-margin">
            <b>Per Year</b>
            <br />
            Salary: {empSalary * 26}
            Deductable: {Math.round(totalDeductable)}
            Net Salay: {(empSalary * 26).toFixed(2) - Math.round(totalDeductable).toFixed(2)}
        </div>
    </Paper>
}

BenefitsSummary.PropTypes = {
    empSalary: PropTypes.number.required, 
    empDeductable: PropTypes.number.required, 
    dependentsDeductable: PropTypes.number.required
}

export default BenefitsSummary;