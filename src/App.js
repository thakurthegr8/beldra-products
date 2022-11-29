
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBarR";
import Products from "./components/Products";
import Infrastructure from "./components/Infrastructure";
import Formwork from "./components/Formwork";
import Scaffolding from "./components/Scaffolding";
import Shoring from "./components/Shoring";
import OtherProducts from "./components/OtherProducts";
import InfrastructureDesc from "./components/infrastructureDesc";
import SiteReferences from "./components/References";
import ProductOnlySection from "./components/ProductOnlySection";
import ScrollNavbar from "./components/ScrollNavbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Footer from "./components/Footer";
//import React,{useState} from 'react';

export default function App() {
  // const infrastructureLinks=[
  //   "DesignDevelopment",
  //   "PatternDies",
  //   "LabTesting",
  //   "CastingForging",
  //   "ShotBlasting",
  //   "Grinding",
  //   "Machining",
  //   "Welding",
  //   "ZincElectroplating",
  //   "QualityCheckPacking",
  // ];
  return (
    <Router>
    <div className="App">
      <NavBar />
      <ScrollNavbar/>
      <Switch>
      <Route path="/" exact component = {Main}/>
      <Route path="/products" exact component = {Products}/>
      <Route path="/infrastructure" exact component = {Infrastructure}/>
      <Route path="/references" exact component = {SiteReferences}/>
      <Route path={"/infrastructure/:link"} component = {InfrastructureDesc}/>
      <Route path={"/products/formwork"} exact component = {Formwork}/>
      <Route path={"/products/formwork/:link"} component = {ProductOnlySection}/>
      <Route path={"/products/scaffolding"} exact component = {Scaffolding}/>
      <Route path={"/products/scaffolding/:link"} component = {ProductOnlySection}/>
      <Route path={"/products/shoring"} exact component = {Shoring}/>
      <Route path={"/products/shoring/:link"} component = {ProductOnlySection}/>
      <Route path={"/products/otherProducts"} exact component = {OtherProducts}/>
      <Route path={"/products/otherProducts/:link"} component = {ProductOnlySection}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

