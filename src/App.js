import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
     <Add/>
     <SearchBook/>
     <DeleteBook/>
     <ViewAll/>

      
    </div>
  );
}

export default App;
