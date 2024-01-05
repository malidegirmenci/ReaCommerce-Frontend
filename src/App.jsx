import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import './App.css';

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
import Cart from './pages/Cart';
import Order from './pages/Order';
import axiosWithAuth from './api/axiosWithAuth';

import { updateCategories } from './store/actions/globalAction/globalAction';
import { userSuccess } from './store/actions/userAction/userAction';
import { fetchProducts } from './store/actions/productAction/productAction';
import PrivateRoute from './components/general/PrivateRoute';


function App() {
  const dispatch = useDispatch();
  const [isEqualToken, setIsEqualToken] = useState(false);
  const user = useSelector((state) => state.user.response)
  let isLoggedIn = user.hasOwnProperty("token")
  
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      axiosWithAuth()
        .get("/verify")
        .then((response) => {
          dispatch(userSuccess(response.data))
          localStorage.setItem("Token", response.data.token);
          setIsEqualToken(true);
        })
        .catch((error) => {
          console.log("Error: ", error);
          localStorage.removeItem("Token");
        });
    }
    dispatch(updateCategories());
    dispatch(fetchProducts());
  }, [isLoggedIn])
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <PrivateRoute
          path="/order"
          component={Order}
          isAuthenticated={isEqualToken}
        />
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/shopping/:gender/:category/:productId/:productNameSlug" exact>
          <ProductPage />
        </Route>
        <Route path="/shopping/:gender?/:category?" exact>
          <ProductList />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
