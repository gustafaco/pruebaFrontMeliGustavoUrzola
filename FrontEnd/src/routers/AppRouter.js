import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Finder from '../components/Finder';
import ProductDetail from '../components/ProductDetail';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Finder } />
          <Route exact path="/items" component={ Finder } />
          <Route exact path="/items/:id" component={ ProductDetail } />
        </Switch>
      </Router>
    </div>
  )
}