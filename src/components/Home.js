import React, { Component, useState, useRef, useEffect } from "react";
//import {ContactDetailEntity, LeadInfoEntity, UserInfoEntity, getContacts, getLeads, getUsers} from '../entities/domainEntities';

//import { useForm, Controller } from "react-hook-form";
import { Row, Col, Container, Button, Alert, Link, FormGroup,
    Label, Form, Modal, ModalHeader, ModalBody, ModalFooter,
  } from "reactstrap";

  import '../styles/homePage.css';


const HomePage=()=> {

    const [pageOption, setPageOption] = useState("home");
    const baseUrl = "http://localhost:3000";

const pages = [
    { value: "home", label: "Home" , variant:"light" },
    { value: "contact", label: "Contact"  , variant:"dark" },
    { value: "contacts", label: "Contacts"  , variant:"dark" },
    { value: "user", label: "User"  , variant:"secondary" },
    { value: "users", label: "Users"  , variant:"secondary" },
    { value: "lead", label: "Lead"  , variant:"info" },
    { value: "leads", label: "Leads"  , variant:"info" },
];

    return(
        <div>
        <table border="0" className="HomePage-table">
            <tbody>
            <tr>
                {
        pages.map(
            (x, idx) => 
            (
            /*
            //This goddamn works!!

                <div>
                    <p>{x.value}</p>
                    <p>{x.label}</p>
                    <p>{x.variant}</p>
                    <p>{idx}</p>
                    <p>{baseUrl}/{x.value}</p>
                </div>
            */
           <td className={`HomePage-td-${x.value}`}>
                <Alert key={idx} variant={x.variant}>
                    <a href={`${baseUrl}/${x.value}`} className="HomePage-td-text">{x.label}</a> 
                </Alert>
            </td>
            )
        )
            }
            </tr>
            </tbody>
            </table>

            <p>
                Click the links above to enter data
            </p>

            </div>
    );
};


export default HomePage;