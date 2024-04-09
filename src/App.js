import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import DeleteBus from './components/DeleteBus';

function App() {
  return (
    <div>
      <AddBus/>
      <ViewBus/>
      <DeleteBus/>
    </div>
  );
}

export default App;
