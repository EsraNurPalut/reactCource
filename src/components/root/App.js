import React, { Component } from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Routes,Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail"

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact componet={Dashboard}/>
          <Route path="/product" exact componet={Dashboard}/>
            <Route path="/cart" exact componet={CartDetail}/>
      </Routes>
      <Dashboard/>
    </Container>
  );
}

export default App;
