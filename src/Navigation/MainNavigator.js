import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import AddTodo from '../components/AddTodo'


const MainNavigator = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={AddTodo} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainNavigator