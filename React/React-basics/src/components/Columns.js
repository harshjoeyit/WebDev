
import React from 'react'

const persons = [
      {
            id : 1, 
            name: 'Jeffry'
      },
      {
            id : 2,
            name: 'Jordan'
      },
      {
            id : 3,
            name : 'Electra' 
      }
]

function Columns() {
      return (
            // we could use div to enclose jsx that is to be returned 
            // td cannot appear as child of div 
            // so we use React.Fragment
            
            // <React.Fragment>
            // <td>Name</td>
            // <td>Harshit</td>
            // </React.Fragment>

            <React.Fragment>
            {
                  persons.map(person => (
                        <tr key={person.id}>
                              <td>{person.id}</td>
                              <td>{person.name}</td> 
                        </tr> 
                  ))
            }
            </React.Fragment>
      )
}

export default Columns
