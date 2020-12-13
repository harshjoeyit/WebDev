
import React, { Component } from 'react'

export class DefaultPropChild extends Component {
    
    static defaultProps = {
        name: "No Name",
        age: 0,
        city: "No city"
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}  {this.props.age} {this.props.city} </h3>
            </div>
        )
    }
}

export function DefaultPropChild2(props) {
    console.log(props);
    return (
        <div>
            <h3>{props.name}  {props.age} {props.city} </h3>
        </div>
    )
}

DefaultPropChild2.defaultProps = {
    name: "No Name",
    age: 0,
    city: "No city"
}


const defaultUser = { firstName: 'John', lastName: 'Doe' };

export function Greet({user = defaultUser}) {
  return (<div>{`Hi ${user.firstName} ${user.lastName}`}</div>)
}