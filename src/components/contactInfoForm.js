import React from 'react';
import GenderRadioButton from './gender.js';
import '../styles/UserInfoForm.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'axios'
import {ContactDetailEntity, LeadInfoEntity, UserInfoEntity, getContacts, getLeads, getUsers} from '../entities/domainEntities';



const baseUrl = "https://localhost:44340/api";

function setStatusMessage(s)
{
  let [message, setMessage] = React.setState(s);
}


class ContactInfoForm extends React.Component 
{
    constructor(props) 
    {
      super(props);
      this.state = 
        {
          contactType:"",
          contactName:"",
          dateOfBirth:"",
          gender:"",
          email: "",
          contactNumber: ""
        };


      this.handleInputChange = this.handleInputChange.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

 
    onClickHandler(event)
    {
      const axios = require('axios');

      let posturl = baseUrl + "/contacts";
      const options = 
      {
        method: 'post',
        url: posturl,
        data: {
            contactType: this.state.contactType,
            contactName: this.state.contactName,
            dateOfBirth: this.state.dateOfBirth,
            gender: this.state.gender,
            email:this.state.email,
            contactNumber : this.state.contactNumber,
            id : 0

        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      };


axios.interceptors.response.use(response => {
  console.log('whatthecheck:', JSON.stringify(response, null, 2))
  return response
}) 

          var self = this;
          const res = axios(options)
          .then((response) => {
              // Handle the failure case on the code is proper
              if (response.data.code === 0) {
                self.setMessage("Sent Successfully");
                return {
                  success: true,
                  user: new UserInfoEntity(response.data.data),
                };
              }
            })
            .then((x) => {console.log('Mathematica',x.success, x.user, self.message);})
              .catch((error) => {
                //self.setMessage( "Send error" );
              return {
                success: false,
                data: error.message,
              };
            });


          return res;
      //page redirection => react router pkg (redirection rules)
      //session -- > browser local storage (domain scope) variable | (session variable === local variable scoped to current page) 
    }


    handleInputChange(event) 
    {
      const target = event.target;
      const value = target.type === 'radio' ? target.checked : target.value;
      const name = target.name;

      /*
      switch(target.name)
      {
        case 'email': console.l('email' + target.value); break;
        case 'phone': alert('phone' + target.name); break;
        case 'userName': alert('userName' + [name]); break;
      }*/

      this.setState({
        [name]: value
      });
    }
  


    render() {

      const {userInfoId, uesrName, phone, email, role, message} = this.state;

      return (


        <form >
          <table className='UserInfoForm-table' border="1">
            <tr><td>
              
              
              <table className='UserInfoForm-table' border="0">
            <tr><td>
              <label color="#204030">
                {
                  this.message
//                  this.state.message[0] === "undefined"? 'None' : this.state.responsePayload
                }
              </label>
              </td></tr>
            <tr>
              <td>
              Contact Type: <label className='UserInfoForm-form' name="contactType" value={this.contactType}></label>
              </td>
            </tr>
            
            <tr>
              <td>
              Contact Name: <input className='UserInfoForm-form'  name="contactName" value={this.contactName} onChange={this.handleInputChange}></input>
              </td>
            </tr>

            <tr>
              <td>
              Date Of Birth: <input className='UserInfoForm-form' name="dateOfBirth" value={this.dateOfBirth} onChange={this.handleInputChange}></input>
              </td>
            </tr>

            <tr>
              <td>
              Email: <input className='UserInfoForm-input' name="email" value={this.email} onChange={this.handleInputChange}></input>
              </td>
            </tr>
            <tr>
              <td>
              Gender: <GenderRadioButton></GenderRadioButton>
              </td>
            </tr>
            <tr>
              <td>
              Contact Number: <input className='UserInfoForm-input' name="contactNumber" value={this.contactNumber} onChange={this.handleInputChange}></input>
              </td>
            </tr>
            <tr>
              <td>
              <input type="button" value="Submit" onClick={this.onClickHandler}></input>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              </tr></table>              
              
              </td></tr>
          </table>
        </form>
      );
    }
  }
  
  export default ContactInfoForm