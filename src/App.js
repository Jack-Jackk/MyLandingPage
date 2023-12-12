import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './Layout/Navbar';
 
function App() {
  return (
<div className="App">
   <Routes>
      <Route path="/" element={<Navbar/>}>

      </Route>
  </Routes>
</div>
  );
}

export default App;
