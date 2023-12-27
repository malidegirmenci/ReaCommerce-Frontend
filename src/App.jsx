import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

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
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/team">
          <Team/>
        </Route>
        <Route path="/pages">
          <ProductPage />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/shopping">
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
