import React ,{ useState}from "react";
import SideMenu from "./sideMenu";
import TopBar from "./topBar";
import { Formik } from "formik";

function Task1(){
    const SearchContact= [
        {
            name:"Hena",
            phoneNo:9543305111,
            ObjectId:0
        },
        {
            name:"Shameem",
            phoneNo:9543412999,
            ObjectId:1
        },
        {
            name:"Kaleel",
            phoneNo:9843365004,
            ObjectId:2
        },
        {
            name:"Fathima",
            phoneNo:9150029607,
            ObjectId:3
        },
        {
            name:"Barkath",
            phoneNo:7667042777,
            ObjectId:4
        },
    ];
    const [searchlist,setSearchlist]=React.useState(SearchContact);
    const [result,setResult]=useState();
    const [searchname,setSearchName]=useState();
    
    
    const handleChange=(e) => {
        console.log(e.target.value);
        setSearchName(e.target.value)
    }

    const searchFun=()=>{
        console.log("checking here",searchlist)
        searchlist.map(function(data){
            console.log("checking data",data)
            console.log("searchname",searchname)
            if(data.name==searchname)
            {
               setResult(data.phoneNo)
            }
        })
        
    }

    return(
        <>
          <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" 
            data-sidebar-position="fixed" data-header-position="fixed">
                <SideMenu></SideMenu> 
              
              <div className="body-wrapper">
                 <TopBar></TopBar>
                 
                 <div className="container-fluid">
                    <h1>Search Contact</h1>

                        <input type="text" name="search" placeholder="Search contact" onChange={handleChange}/>
                        
                        <button type="button" className="btn btn-primary" onClick={searchFun}>Search</button>

                        <p>Search Result: {result}</p>

                        <div>
                            {SearchContact.map(function (data,index){
                                return <div key={index}>{data.phoneNo}</div>;
                            })}
                        </div>
                 </div>
              </div>
          </div>
        </>
    );
};
export default Task1;