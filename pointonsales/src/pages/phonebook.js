import React, { useState } from "react";
import SideMenu from "./sideMenu";
import TopBar from "./topBar";
import { Formik } from "formik";

function PhoneBook(){
    const contactList=[    
        {
            name:"Hena",
            phoneNo:9543305111,
        },
        {
            name:"Shameem",
            phoneNo:9543412999,
        },
        {
            name:"Kaleel",
            phoneNo:9843365004,
        },
        {
            name:"Fathima",
            phoneNo:9150029607,
        },
        {
            name:"Barkath",
            phoneNo:7667042777,
        }
    ];
const [phlist,setPhist]=useState(contactList)

    return(
        <>
          <div 
            className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" 
            data-sidebar-position="fixed" data-header-position="fixed">
                <SideMenu></SideMenu> 
              
              <div className="body-wrapper">
                 <TopBar></TopBar>
                <div className="container-fluid">
                    <h1>Phone Book </h1>
                   <table>
                    {phlist.map(function(data,index){
                        return<>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.phoneno}</td>
                        </tr>
                        </>
         ``           }
                    
                    )}
                   </table>
                </div>
              </div>
          </div>
        </>
    );
};
export default PhoneBook;