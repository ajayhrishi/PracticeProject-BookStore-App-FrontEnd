import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './componenets/Header'
import Home from './componenets/Home'
import AboutUs from './componenets/AboutUs'
import AddBook from './componenets/AddBook'
import Books from './componenets/Book/Books'
const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/add' element={<AddBook/>} exact></Route>
          <Route path='/books' element={<Books/>} exact></Route>
          <Route path='/aboutUs' element={<AboutUs/>} exact></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
