import React from 'react';
import { Paper, TableRow, TableHead, TableCell, TableBody, Table, Button } from '@material-ui/core';
import Dependent from './Dependent';
import calculateDeductionFromName from './CalcUtil';

const DEPENDENT_DEDUCTABLE = 500;

export default class DependentDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            dependents: [],
            totalDependentDeductable: 0
        }
    }
    onDelete = (e) => {
        const { dependents } = Object.assign({}, this.state);
        dependents.splice(e.target.value, 1);
        this.setState({ dependents, totalDependentDeductable: dependents.reduce((acc, cur) => acc + cur.cost, 0) });
    }
    onAdd = () => {
        const { dependents } = Object.assign({}, this.state);
        dependents.push({
            name: '',
            cost: 0
        });
        this.setState({ dependents });
    }
    onChange = ({ index, value }) => {
        const { dependents } = Object.assign({}, this.state);
        dependents[index]['name'] = value;
        const { name } = dependents[index];
        dependents[index]['cost'] = calculateDeductionFromName({ name: value, cost: DEPENDENT_DEDUCTABLE });
        this.setState({ dependents, totalDependentDeductable: dependents.reduce((acc, cur) => acc + cur.cost, 0) });
    }
    componentDidUpdate(prevProps, prevState) {
        prevState.totalDependentDeductable !== this.state.totalDependentDeductable
            ? this.props.onDependentDeductableChange(this.state.totalDependentDeductable)
            : void 0;
    }
    render() {
        return (
            <React.Fragment>
                <Paper className="paper-size paper-padding">
                    <div className="App-text-align-left"><b>Dependent Details</b></div>
                    <Table  >
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell numeric>Deductable (year)</TableCell>
                                <TableCell ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.dependents.map((dependent, index) => {
                                return (
                                    <Dependent {...dependent} index={index} onDelete={this.onDelete} onChange={this.onChange} />
                                );
                            })}
                            <TableRow key="total">
                                <TableCell><b>Total</b></TableCell>
                                <TableCell numeric><b>{this.state.totalDependentDeductable.toFixed(2)}</b></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <br />
                    <Button variant="outlined" size="small" color="primary" name='addDependents' onClick={this.onAdd}>
                        Add Dependent
                    </Button>
                </Paper>
                <br />
            </React.Fragment>
        );
    }
}