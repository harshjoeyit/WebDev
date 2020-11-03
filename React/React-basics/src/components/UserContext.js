
import React from 'react'

// we can set default values, it is used in Consumer 
//  when user provider is not provided  
const UserContext = React.createContext('harshjoeyit')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}