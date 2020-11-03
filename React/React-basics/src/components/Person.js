
import React from 'react'

function Person({person}) {
      return (
            <div>
                  <h2>{person.name}</h2>
                  <span>Aged {person.age}, </span>
                  <span>I am <b>{person.superhero}</b></span>
            </div>
      )
}

export default Person
