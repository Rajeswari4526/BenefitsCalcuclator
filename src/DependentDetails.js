import React from 'react';
import Dependent from './Dependent';

export default class DependentDetails extends React.Component {
    constructor(){
        super();
        this.state = {
            dependents : []
        }
    }
    onDelete = (e) => {    
        const {dependents} = Object.assign({}, this.state);
        dependents.splice(e.target.value, 1);
        this.setState({dependents});
    }
    onAdd = (e) => {
        const {dependents} = Object.assign({}, this.state);
        dependents.push({
            firstName: '',
            lastName: '',
            cost: 0
        });
        this.setState({dependents});
    }
    onChange = ({index, property, value}) => {
        const {dependents} = Object.assign({}, this.state);        
        dependents[index][property] = value;
        const {firstName} = dependents[index];
        dependents[index]['cost'] = firstName ? (firstName[0] === 'A' ? 450 : 500) : 0;
        this.setState({dependents});
    }
    render () {
       const { classes } = this.props  || {};
        return (            
            <React.Fragment>
                <React.Fragment>
                    Dependent Details
                </React.Fragment>
                {
                    this.state.dependents.map((dependent,index) => <Dependent {...dependent} index = {index} onDelete={this.onDelete} onChange = {this.onChange} />)
                }
                <button name='addDependents' onClick={this.onAdd}>Add</button>
            </React.Fragment>
        );
    }
}