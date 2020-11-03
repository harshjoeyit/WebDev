
import React from 'react'
import Person from './Person'

function NameList() {
      const persons = [
            {
                  id: 1,
                  name: 'Bruce',
                  age: 30,
                  superhero: 'Batman'
            },
            {
                  id: 2,
                  name: 'Clark',
                  age: 34,
                  superhero: 'Superman'
            },
            {
                  id: 3,
                  name: 'Tony',
                  age: 43,
                  superhero: 'Ironman'
            }
      ]
      
      // getting this person list from person component
      // React gives warning when each items in a list is not given a unique key
      // key can be anything that is uniques for each item
      // its is not a prop, if we need to use this value in child component(here Person), pass it again using another prop
      // why key is required 
      // to update the DOM

      // the array index can be used as key 
      // if items do not contain a unique id
      // if the list is static (will not change)
      // if list is not reordered in future (like sorting)

      // npm packages can be used to genreate unique keys 

      const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
      
      return (
            <div>{personList}</div>
      )
}

export default NameList
