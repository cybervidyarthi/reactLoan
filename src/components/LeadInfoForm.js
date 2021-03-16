import React from 'react';
import RoleRadioButton from './roleRadio.js';
import '../styles/UserInfoForm.css';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'axios'
import {ContactDetailEntity, LeadInfoEntity, UserInfoEntity, getContacts, getLeads, getUsers} from '../entities/domainEntities';
import ChooseLeadStatus from './choices';

const baseUrl = "https://localhost:44340/api";



function setStatusMessage(s)
{
  let [message, setMessage] = React.setState(s);

}


class LeadInfoForm extends React.Component 
{

    constructor(props) 
    {
      super(props);
      this.state = 
        {
          loanAmount:"",
          leadSource:"",
          communicationMode:"",
          currentStatus:"",
          contactId: null,
          responsePayload: ""
        };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

 
    
    handleInputChange(event) 
    {
      const target = event.target;
      const value = target.type === 'radio' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  


    onClickHandler(event)
    {
      const axios = require('axios');

      const options = 
      {
        method: 'post',
        url: 'https://localhost:44340/api/leads',
        data: {
          LoanAmountRequired: this.state.loanAmount,
          LeadSource: this.state.leadSource,
          CommunicationMode: this.state.communicationMode,
          CurrentStatus: this.state.currentStatus,
          Contact: this.state.contactId
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      };

      console.log("Leader", options.data);
          const res = axios(options)
          .then((response) => {
              // Handle the failure case on the code is proper
              if (response.status === 201) {
                this.setState({responsePayload:"Sent Successfully"})

                return {
                  success: true,
                  lead: new LeadInfoEntity(response.data),
                };
              }
            })
              .catch((error) => {
                this.setState({responsePayload:"send failure"})

                return {
                success: false,
                data: error.message,
              };
            });

            return res;
    }



    render() {

      const {userInfoId, uesrName, phone, email, role, message} = this.state;

      return (


        <form >
          <table className='UserInfoForm-table' border="1">
            <tbody>
            <tr><td>
                    <table className='UserInfoForm-table' border="0">
                  <tr><td>
                    <label>
                      { this.responsePayload}
                    </label>
                    </td></tr>
                  <tr>
                    <td>
                    Loan Amount: <input className='UserInfoForm-form' name="loanAmount" value={this.loanAmount}  onChange={this.handleInputChange}></input>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>
                    Lead Source: <input className='UserInfoForm-form'  name="leadSource" value={this.leadSource} onChange={this.handleInputChange}></input>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ChooseLeadStatus></ChooseLeadStatus>
                    Communication Mode: <input className='UserInfoForm-form' name="communicationMode" value={this.communicationMode} onChange={this.handleInputChange}></input>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    Current Status: <input className='UserInfoForm-input' name="currentStatus" value={this.currentStatus} onChange={this.handleInputChange}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Contact: <input className='UserInfoForm-input' name="contactId" value={this.contactId} onChange={this.handleInputChange}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Role: <RoleRadioButton></RoleRadioButton>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <input className='UserInfoForm-input' type="button" value="Submit" onClick={this.onClickHandler}></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      &nbsp;
                    </td>
                    </tr></table>              
              </td></tr>
              </tbody>
          </table>
        </form>
      );
    }
  }
  
  export default LeadInfoForm