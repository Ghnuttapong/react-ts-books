import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

import BookItem from './pages/books/item-books';
import BooksAdd from './pages/books/add-books'
import DrawerMain from './components/drawer/drawer';
import BooksList from './pages/books/list-books';
import Notfound from './pages/404/notfound';

function App() {
  return (
   <div>
    <DrawerMain />
    <Routes>
      <Route path="/" element={<BooksList />} />
      <Route path="/books" element={<BookItem />} />
      <Route path="/books/add" element={<BooksAdd />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
   </div> 
  );
}

export default App;
