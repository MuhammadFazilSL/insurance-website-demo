
import './App.css';
import Footer from './footer/footer';
import Home from './home/home';
import InsurancePage from './insurancePage/insurancePage';
import Navbar from './navbar/navbar';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home />} ></Route>
      <Route path='/insurance-website-demo/' element={ <Home />} ></Route>
      <Route path='/insurance-website-demo/insurance/:insurance' element={ <InsurancePage />} ></Route>
    </Routes>
    <Footer />
    </div>
    </Router>

  );
}

export default App;
