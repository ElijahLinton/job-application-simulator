import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Homepage from "./pages/Homepage";
import Questionone from './pages/questionone';
import Questiontwo from './pages/questiontwo';
function App() {

  return (
  <Router>
    <Routes>
    <Route
        path='/'
     element={<Homepage />}
  />
    <Route 
    path='/quest'
    element={<Questionone />}
      />

    <Route
    path='/questtwo'
    element={<Questiontwo />}
    />

    </Routes>
    </Router>
  );
}

export default App;
