import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/UserInfoForm.css';
import UserInfoForm from './components/UserInfoForm';
import LeadInfoForm from './components/LeadInfoForm.js';
import ContactInfoForm from './components/contactInfoForm';
import HomePage from './components/Home';
import {GetUsers, GetContacts, GetLeads} from './components/getData'
import { BrowserRouter as Router, IndexRoute, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <Router>
      <Route path = "/" component = {HomePage} />
       <Route path = "/contact" component = {ContactInfoForm} />
       <Route path = "/user" component = {UserInfoForm} />
       <Route path = "/lead" component = {LeadInfoForm} />
       <Route path = "/contacts" component = {GetContacts} />
       <Route path = "/users" component = {GetUsers} />
       <Route path = "/leads" component = {GetLeads} />
 </Router>

);
}

export default App;
