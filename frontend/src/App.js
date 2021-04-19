import Home from './pages/Home';
import Shop from './pages/Shop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import CartPage from './pages/Cart';
import NoMatch from './components/NoMatch';
import CategoryProducts from './pages/CategoryProducts';
import { GlobalStyle } from './globalstyles';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productsActions';

const App = () => {

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchProducts(dispatch));
        }, []);

        return (
          <Router>
              <GlobalStyle /> 
              <div className="App">
              <Navbar />
                  <Switch>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/shop' component={Shop}/>
                      <Route exact path='/cart' component={CartPage}/>
                      <Route path='/products/:id' component={Product}/>
                      <Route path='/categories/:id' component={CategoryProducts}/>
                      <Route component={NoMatch} />
                  </Switch>
              <Footer />
            </div>
          </Router>
        );

}


export default App;
