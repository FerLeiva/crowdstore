import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";
import AddProductForm from "./forms/AddProductForm";
import UpdateProductForm from "./forms/UpdateProductForm";
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/addProduct" component={AddProductForm} />
        <Route path="/updateProduct/:id" component={UpdateProductForm} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
