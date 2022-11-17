import './Styles/App.scss'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Discover from './pages/Discover'
import Join from './pages/Join'

//importa BR como R.R.R.L. que son elementos dentro de BR

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/discover' exact element={<Discover/>}/>
        <Route path='/join' exact element={<Join/>}/>
      </Routes>
    </Router>
  );
}

export default App;
