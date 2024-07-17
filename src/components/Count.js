import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import {createStore} from 'redux'
import { Provider, connect, useSelector, useDispatch } from 'react-redux'

const countReducer = function(state = 0, action) {
    switch(action.type) {
        case "ADD": 
           return state + 1;
        case "SUBTRACT":
           return state - 1;
        default:
            return state;
    }
}

const store = createStore(countReducer)

const mapStateToProps = state => {
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({type: "ADD"}),
        subtract: () => dispatch({type: "SUBTRACT"}),
    }
}



const Count = ({count, add, subtract}) => {
  return (
    <div>
        <h1>count = {count}</h1>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
    </div>
  )
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Count)

export  {Count, Container, store}


// import logo from "./logo.svg";
// import "./App.css";
// import { Count, Container, store } from "./components/Count";
// import { Provider } from "react-redux";

// function App() {
//   return (
//     // <Provider store={store}>
//     //   <Container />
//     // </Provider>
//     <></>
//   );
// }