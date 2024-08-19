import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './componenets/Header'
import Home from './componenets/Home'
import AboutUs from './componenets/AboutUs'
import AddBook from './componenets/AddBook'
import BookDetails from './componenets/Book/BookDetails'
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
          <Route path='/UpdateBook/:id' element={<BookDetails/>} exact></Route>
          <Route path='/AllBooks' element={<Home/>} exact></Route>

        </Routes>
      </main>
    </div>
  )
}

export default App
