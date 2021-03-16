import React from 'react';
import RoleRadioButton from './roleRadio.js';
import '../styles/UserInfoForm.css';
import {ContactDetailEntity, LeadInfoEntity, UserInfoEntity, getContacts, getLeads, getUsers} from '../entities/domainEntities';


function setStatusMessage(s)
{
  let [message, setMessage] = React.setState(s);

}


class UserInfoForm extends React.Component 
{
    constructor(props) 
    {
      super(props);
      this.state = 
        {
          userInfoId:"",
          userName:"",
          phone:"",
          email:"",
          role: "Admin",
          responsePayload: ""
        };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

 
    onClickHandler(event)
    {
      const axios = require('axios');
      var msg;

      const options = 
      {
        method: 'post',
        url: 'https://localhost:44340/api/users',
        data: {
          UserName: this.state.userName,
          Phone: this.state.phone,
          Email: this.state.email,
          Role: this.state.role
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      };

/*
      const promise = axios(options);
      const dataPromise = promise.then((response) => response.data);
      const userId = dataPromise.then((datum) => datum.id);
      console.log(userId);
*/
//      axios(options).then((response) => response.data).then((datum) => datum.userId).then((x) => console.log(x));
/*
      const lst=[];
      const stackIt = (x) => lst.push(x);

      axios(options)
        .then(response => {
          stackIt(response.data);
        })
          .catch(err => console.log(err));

        console.log(lst);
        this.setState({responsePayload: lst});
*/        

/*
axios.interceptors.response.use(response => {
  console.log('whatthecheck:', JSON.stringify(response, null, 2))
  return response
}) 
*/
          const res = axios(options)
          .then((response) => {
              // Handle the failure case on the code is proper
              if (response.status === 201) {
                this.setState({responsePayload:"Sent Successfully"})

                return {
                  success: true,
                  user: new UserInfoEntity(response.data),
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
      //page redirection => react router pkg (redirection rules)
      //session -- > browser local storage (domain scope) variable | (session variable === local variable scoped to current page) 
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
  


    render() {

      const {userInfoId, uesrName, phone, email, role, message} = this.state;

      return (


        <form >
          <table className='UserInfoForm-table' border="1">
            <tr><td>              
              
              <table className='UserInfoForm-table' border="0">
            <tr><td>
              <label>
                {this.state.responsePayload}
              </label>
              </td></tr>
            <tr>
              <td>
              User Id: <label className='UserInfoForm-form' name="userInfoId" value={this.userInfoId}></label>
              </td>
            </tr>
            
            <tr>
              <td>
              User Name: <input className='UserInfoForm-form'  name="userName" value={this.userName} onChange={this.handleInputChange}></input>
              </td>
            </tr>

            <tr>
              <td>
              Phone: <input className='UserInfoForm-form' name="phone" value={this.phone} onChange={this.handleInputChange}></input>
              </td>
            </tr>

            <tr>
              <td>
              Email: <input className='UserInfoForm-input' name="email" value={this.email} onChange={this.handleInputChange}></input>
              </td>
            </tr>
            <tr>
              <td>
              Role: <RoleRadioButton></RoleRadioButton>
              </td>
            </tr>
            <tr>
              <td>
              <input className='button' type="button" value="Submit" onClick={this.onClickHandler}></input>
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
  
  export default UserInfoForm