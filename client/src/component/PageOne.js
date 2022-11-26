import React, { Fragment } from "react";
import { useState } from "react";
import "./PageOne.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function PageOne(){
    const [data,SetData] = useState({}) // getting and storing user input
    const navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const fd = new FormData(); // Using form Data to store and send data to backend
        fd.append("class",data.class)
        fd.append("name",data.name)
        fd.append("function",data.function)
        const config = {
            headers : {
                "Content-Type":"application/json"
            }
        }
        let res= await axios.post("http://localhost:8080/createbutton",fd,config) // hitting post request
        navigate("/pagetwo")
    }
    return (
        <Fragment>
            <div id="outer">
                <div id="card">
                    <section>
                    <p>Fill In the Prop Details</p>
                    <form onSubmit={handleSubmit}>
                        <label>Class : </label><br/>
                        <input type="text" name="class" onChange={(e)=>{SetData({...data,class:e.target.value})}} /><br/>
                        <label>Name: </label><br/>
                        <input type="text" name="name" onChange={(e)=>{SetData({...data,name:e.target.value})}}  /><br/>
                        <label>Function : </label><br/>
                        <input type="text" name="function" onChange={(e)=>{SetData({...data,function:e.target.value})}} /><br/><br/>
                        <button type="submit" className="btn btn-light">SUBMIT</button>
                    </form>
                    <div className='wave wave1'></div> 
                <div className='wave wave2'></div> 
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}
// used empty wave div to create animated effect of wave.
export default PageOne;