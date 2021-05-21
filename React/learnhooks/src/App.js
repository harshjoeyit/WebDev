
import React from 'react'
import './App.css'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter3 from './components/HookCounter3'
import HookCounter4 from './components/HookCounter4'
import HookDocTitle from './components/HookDocTitle'
import HookMouse from './components/HookMouse'
import MouseContainer from './MouseContainer'
import UseRefExample1 from "./components/useRefExample1";
import Example from './components/Example';

function App() {
    return (
        <div className='App'>
          {/* <HookCounter /> */}
          {/* <HookCounter2 /> */}
          {/* <HookCounter3 /> */}
          {/* <HookCounter4 /> */}
          {/* <HookDocTitle /> */}
          {/* <HookMouse /> */}
          {/* <MouseContainer /> */}
          <UseRefExample1 />
          <Example />
        </div>
    )
} 

export default App