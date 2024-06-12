import logo from './logo.svg';
import './App.css';
import AddTeacher from './components/AddTeacher';
import SearchTeacher from './components/SearchTeacher';
import ViewTeacher from './components/ViewTeacher';

function App() {
  return (
    <div >
      <AddTeacher/>
      <SearchTeacher/>
      <ViewTeacher/>
    </div>
  );
}

export default App;
