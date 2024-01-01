import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from './layout/Header';
import Home from './pages/Home';
import Footer from './layout/Footer';
import ProductList from './pages/ProductList';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import Team from './pages/Team';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

import useLocalStorage from './hooks/useLocalStorage';
import axiosWithAuth from './api/axiosWithAuth';

import { updateCategories } from './store/actions/globalAction/globalAction';
import { userSuccess } from './store/actions/userAction/userAction';
import { fetchProducts } from './store/actions/productAction/productAction';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.response);
  
  const [token, setToken] = useLocalStorage("Token", "");

  useEffect(() => {
    if (token) {
      axiosWithAuth()
        .get("/verify")
        .then((response) => {
          dispatch(userSuccess(response.data));
          user.length && setToken(user.token);
        })
        .catch((error) => {
          console.log("Error: ",error);
          localStorage.removeItem("Token");
        });
    }
    dispatch(updateCategories());
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/pages">
          <ProductPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shopping/:gender?/:category?">
          <ProductList />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
