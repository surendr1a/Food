import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from './screens/Signup';
import { CardProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <CardProvider>
    <Router>
      <div>
           <Routes>
            <Route exact path="/" element={<Home/>} /> 
             <Route exact path="/login" element={<Login/>} />
             <Route exact path="/createuser" element={<Signup/>} />
             <Route exact path="/myOrder" element={<MyOrder/>} />
            </Routes>
      </div>
    </Router>
    </CardProvider>
  );
}

export default App;
