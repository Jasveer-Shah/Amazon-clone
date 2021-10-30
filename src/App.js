import React from 'react'
import './App.css';
// import firebase from '../src/utils/firebase';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
// import Home from './pages/Home/Home';
import Header from './components/Header/Header';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import {useEffect, lazy, Suspense } from 'react';
import {useDispatch} from 'react-redux';
import {auth} from './utils/firebase';
import { setuser } from './redux/action';
// import SingleProduct from './pages/SingleProduct/SingleProduct';
// import Checkout from './pages/Checkout/Checkout';
// import Payment from './pages/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Loading from './components/Loading/Loading';
// import Orders from './pages/Orders/Orders';

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"))


const promise = loadStripe("pk_test_51HQ1oqB0Z0nVhfUaq2WiZC5jPTTvxSdxZg8XZ0gLF7DvDeeLIz58vQ6DV3XY0XRUKfdCKSJzFk9HU3dFZXWiSckB00hmZXNGCF")

function App() {
  
  let dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch(setuser(authUser))
      }else {
        dispatch(setuser(null))
      }
    })
  }, [dispatch])
  return (
  
    <BrowserRouter>
     <div className="App">
          <Switch>
               <Suspense fallback={<Loading/>}>
                 <Route path="/orders">
                     <Header/>
                     <Orders/>
                 </Route>

                 <Route path="/payment">
                  <Header/>
                  <Elements stripe={promise}>
                    <Payment/>
                  </Elements>
                </Route>
         
                <Route path="/checkout">
                  <Header/>
                  <Checkout/>
                </Route>

               <Route  path='/product/:id'>
                <Header/>
                <SingleProduct/>
               </Route>

               <Route path='/register'>
                  <Register/>
                </Route> 

               <Route path='/login'>
                 <Login/>
               </Route>
              
               <Route exact path='/'>
                 <Header/>
                  <Home/>
               </Route>
              </Suspense> 
          </Switch>

    </div>
    </BrowserRouter>
  )
}

export default App;
