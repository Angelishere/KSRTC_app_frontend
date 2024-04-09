import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import HomeBus from './components/HomeBus';


function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomeBus />} />
          <Route path='/search' element={<SearchBus />} />
          <Route path='/delete' element={<DeleteBus />} />
          <Route path='/add' element={<AddBus />} />
          <Route path='view' element={<ViewBus />} />
          


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
