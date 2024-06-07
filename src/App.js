import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/search' element={<SearchBook/>}/>
    <Route path='/delete' element={<DeleteBook/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
