import React from 'react'
import './App.css';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
  
    <BrowserRouter>
     <div className="App">
          <Switch>
             <Route path='/'>
               <Header/>
                <Home/>
             </Route>
          </Switch>

    </div>
    </BrowserRouter>
  )
}

export default App;
