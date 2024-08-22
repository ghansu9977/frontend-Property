
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Register from './componet/login';
import AddProperty from './componet/AddProperty';
import Pages from './componet/Page';

function App() {
  return <>
  <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/AddProperty" element={<AddProperty />} />
  </Routes>
  <Pages/>

  </>
}

export default App;
