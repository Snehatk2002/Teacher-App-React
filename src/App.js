import logo from './logo.svg';
import './App.css';
import AddTeacher from './components/AddTeacher';
import SearchTeacher from './components/SearchTeacher';
import ViewTeacher from './components/ViewTeacher';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddTeacher/>}/>
      <Route path='/search' element={<SearchTeacher/>}/>
      <Route path='/view' element={<ViewTeacher/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
