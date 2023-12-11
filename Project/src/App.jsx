import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from './Form/Form1';
import Portfolio from './portfolio/Portfolio';
import Guess from './Guess/Guess';
import Reduxform from './redux/Main';
import Fetch from './fetch api/App';
import Count from './count redux/Count';
import Calc from './calc/Calc';
import './App.css';

function App() {
  return(
    <div>
      <Router>
        <Routes>
            <Route path="/Home" element={<Portfolio />} />
            <Route path="/Guess" element={<Guess />} />
            <Route path="/Reduxform" element={<Reduxform />} />
            <Route path="/FetchAPI" element={<Fetch />} />
            <Route path="/Count" element={<Count />} />
            <Route path="/Calculator" element={<Calc />} />
            <Route path="/" element={<Form />} />
        </Routes>      
      </Router>
    </div>
  )
}

export default App;