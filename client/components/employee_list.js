import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 4;
let totalCards = PER_PAGE;

class EmployeeList extends Component {

    handleButtonClick() {
        Meteor.subscribe('employees', totalCards += PER_PAGE)
    }

    render() {
        // props.employees => an array of employee objects
        console.log(this.props.employees);
        return(
            <div>
                <h1>Employee List App</h1>
                <div className='employee-list'>
                    {this.props.employees.map(employee => {
                        return <EmployeeDetail key={employee._id} employee={employee} />
                    })}
                </div>
                <button
                    onClick={this.handleButtonClick.bind(this)}
                    className='btn btn-primary'
                >
                    Load more...
                </button>
            </div>
        )
    }
};

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe('employees', PER_PAGE);

    // Return an object. Whatever we return will be sent to EmployeeList as props
    return { employees: Employees.find({}).fetch() };
}, EmployeeList);