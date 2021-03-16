import React, { Component, useState, useRef, useEffect } from "react";

import Select from "react-dropdown-select";

const ChooseLeadStatus = () =>
{

    const [randomOption, setrandomOption] = useState("random");

    const LeadStatus = [
        { value: "InitialCommunication", idx: "1" },
        { value: "FollowUp", idx: "2"  },
        { value: "NotInterested", idx: "3" },
        { value: "ConvertedToCustomer", idx: "4" }
    ];
    
    console.log('LegOfLead', LeadStatus);
    const self=this;
    return(
        <div>
        <select name="selectLeadStatus" onChange={LeadStatus}>
            {LeadStatus.map((v) => { 
                ///This has a problem - the selection isn't working
                return (<option value={v.idx} selected={v.idx}>{v.value}</option>);
            })}
        </select>
        </div>
    );
};

export default ChooseLeadStatus;

