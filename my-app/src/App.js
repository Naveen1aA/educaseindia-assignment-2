import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/dashboard" Component={Dashboard}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={Signup}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
