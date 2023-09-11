import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './component/Dashboard';
import Registration from './component/Registration';
import ViewRecords from './component/ViewRecords';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/registration" element={<Registration />}/>
        <Route exact path="/view-records" element={<ViewRecords />}/>
      </Routes>      
      </Router>
    </div>
  );
}

export default App;
