import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  console.log("start")
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
