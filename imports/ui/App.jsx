import React from 'react';
import EmployeeList from './../../client/components/employee_list';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Employee list!</h1>
                <EmployeeList />
            </div>
        )
    }
}