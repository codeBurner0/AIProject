import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets'
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <img src={logo} alt="" />
    </div>
  )
}

export default App
