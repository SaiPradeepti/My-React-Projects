import {BrowserRouter as Router, Routes, Route} from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/' element={<></>} />
          <Route path='/' element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
