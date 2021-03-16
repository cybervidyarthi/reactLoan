import React, { Component, useState, useRef, useEffect } from "react";
  import '../styles/homePage.css';
  import axios from "axios";

const apibaseUrl = "https://localhost:44340/api";

function GetUsers()
{
  const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get(`${apibaseUrl}/users`)
            .then(res => {
                setUserList(res.data);
            });
    }, []);


    if(userList !== undefined)
    {
        return (
            <div >
            <table >
                <thead >
                    <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {
                    userList.map
                    (
                        x => <tr> 
                            <td>{x.id}</td>
                            <td>{x.userName}</td>
                            <td>{x.phone}</td>
                            <td>{x.email}</td>
                            <td>{x.role}</td>
                        </tr>
                    )
                }
                {userList.length == 0 && <tr>
                    <td className="text-center" colSpan="4">
                        <b>No Users found to display.</b>
                    </td>
                </tr>}
                </tbody>
            </table>
            </div>
        );
    }
    else
    {
        return (
            <div >
            <table >
                <thead >
                <th>User Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                </thead>
                <tbody>
                <tr>
                    <td className="text-center" colSpan="4">
                        <b>No Users found to display.</b>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }    
}

export {GetUsers};

//--------------------------------------------------------------

function GetContacts() 
{
  const [contactList, setContactList] = useState([]);

    useEffect(() => {
        axios.get(`${apibaseUrl}/contacts`)
            .then(res => {
                setContactList(res.data);
            });
    }, []);


    if(contactList !== undefined)
    {
    return (
        <div >
        <table >
            <thead >
                <tr>
                    <th>Contact Type</th>
                    <th>Contact Name</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
            <tbody>
            {
                contactList.map
                (
                    x => <tr>
                        <td>{x.contactType}</td>
                        <td>{x.contactName}</td>
                        <td>{x.dateOfBirth}</td>
                        <td>{x.gender}</td>
                        <td>{x.email}</td>
                        <td>{x.contactNumber}</td>
                    </tr>
                )
            }
            {contactList.length == 0 && <tr>
                <td className="text-center" colSpan="4">
                    <b>No Contacts found to display.</b>
                </td>
            </tr>}
            </tbody>
        </table>
        </div>
    );
    }
    else
    {
        return (
            <div >
            <table >
                <tbody >
                    <tr>
                    <td className="text-center" colSpan="4">
                        <b>No Contacts found to display.</b>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        );    
    }

}

export {GetContacts};




function GetLeads() 
{
  const [leadsList, setLeadsList] = useState([]);

    useEffect(() => {
        axios.get(`${apibaseUrl}/leads`)
            .then(res => {
                setLeadsList(res.data);
            });
    }, []);

if(leadsList !== undefined)
{

  return (
    <div >
      <table >
        <thead >
            <tr>
          <th>LoanAmountRequired</th>
          <th>LeadSource</th>
          <th>CommunicationMode</th>
          <th>CurrentStatus</th>
          <th>Contact</th>
          <th>Id</th>
          </tr>
        </thead>
        <tbody>
        {
            leadsList.map
            (
                x => <tr>
                    <td>{x.loanAmount}</td>
                    <td>{x.leadSource}</td>
                    <td>{x.communicationMode}</td>
                    <td>{x.currentStatus}</td>
                    <td>{x.Contact}</td>
                    <td>{x.contactId}</td>
                </tr>
            )
    	}
        {leadsList.length == 0 && <tr>
            <td className="text-center" colSpan="4">
                <b>No Users found to display.</b>
            </td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
} else {
    return (
        <div >
          <table >
              <tbody>
            <tr>
                <td className="text-center" colSpan="4">
                    <b>No Leads found to display.</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}
}

export {GetLeads};





