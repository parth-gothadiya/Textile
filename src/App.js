import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componet/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </>
  );
}

export default App;
