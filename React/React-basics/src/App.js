import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import GreetWithName from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FuctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import styles from './userStyle.module.css'
import './userStyle.css'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import Clock from './components/Clock';
import CountdownClock from './components/CountdownClock';
import TestComp from './components/TestComp';
import RefsDemo from './components/RefsDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundaries from './components/ErrorBoundaries';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';
import Ajax from './components/Ajax';
import PostForm from './components/PostForm';
import DefaultPropParent from './components/Basics_part2/DefaultProps/DefaultPropParent';

// Basics part 2 
import CheckboxApp from './components/Basics_part2/HandleCheckbox/CheckboxApp';
import Test from './components/Test';
import ItemList from './components/Basics_part2/AddInputsDynamic';
import MemoryGame from './components/Basics_part2/MemoryGame';
import CounterUsingReducer from './components/Basics_part2/ReducerHook/Counter';
import Profile from './components/Basics_part2/PropsAndState/Profile';
import ProfileDisplay from './components/Basics_part2/PropsAndState/ProfileDisplay';


function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}
      
      {/* 
      <GreetWithName name="MJ" profession="Basketball">
        <p>Child Element</p>
      </GreetWithName>
      <GreetWithName name="Diana" superhero="WonderWoman" from="Amazon"/>
      <GreetWithName name="Bruce" profile="Billionare"/>
      
      <Welcome name="Peter" />
       */}

      {/* <Message /> */}

      {/* <Counter name="Jordan" age="43"></Counter> */}
      
      {/* <GreetWithName name="Michael Jordan" betterKnown="Air Jordan" won="5"></GreetWithName> */}

      {/* <Welcome name="Lebron James" betterKnown="King" ></Welcome> */}
      
       {/* <FuctionClick></FuctionClick> */}

      {/* <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}
      
      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}

      {/* <NameList></NameList> */}

      {/* <StyleSheet></StyleSheet>
       <h1 className={styles.success}>Success</h1>
       <h1 className='error'>Error</h1> */}

      {/* <Form /> */}

      {/* <LifeCycleA /> */}

       {/* <FragmentDemo /> */}

       {/* <Table></Table> */}

       {/* <Clock /> */}

       {/* <CountdownClock target={new Date('November 14, 2020 04:00:00')} event="My Birthday"></CountdownClock> */}

       {/* <CountdownClock target={new Date('January 1, 2021 00:00:00')} event="New Year"></CountdownClock> */}

       {/* <TestComp/> */}

       {/* <RefsDemo /> */}

       {/* <Input /> */}

       {/* <FocusInput /> */}

       {/* <PortalDemo /> */}


       {/* In production phase adter npm build 
       only the fallback UI is displayed and error
        message is not shown */}

       {/* <ErrorBoundaries>
        <Hero heroName="Batman"/>
       </ErrorBoundaries>
       <ErrorBoundaries>
        <Hero heroName="Joker"/>
       </ErrorBoundaries> */}

       {/* Note: these props are passed to HOC 
          so we must pass these props from HOC to original components*/}
       {/* <ClickCounter name='Harshit'/> */}
       {/* <HoverCounter name='Bruce Wayne'/> */}

        {/* <UserProvider value='Harshit'>
          <ComponentC />
        </UserProvider> */}

        {/* <Ajax /> */}  

        {/* <PostForm /> */}


        {/* ..................Basics Part 2 ......................*/}

        {/* <DefaultPropParent /> */}

        {/* <CheckboxApp /> */}

        {/* <Test skip={2}/> */}

        {/* <ItemList /> */}

        {/* <MemoryGame /> */}

        {/* <CounterUsingReducer /> */}

        {/* <Test /> */}

        {/* <Profile url='https://api.github.com/users/mojombo' /> */}

        <ProfileDisplay />

      </div>
  );
}

export default App;
