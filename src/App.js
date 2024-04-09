import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div>
      <AddBus/>
      <ViewBus/>
      <DeleteBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
