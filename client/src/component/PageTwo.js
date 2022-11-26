import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Button from "./Button";

function PageTwo(){
    const [propData,SetPropData] = useState([])
    const get_props = ()=>{
        axios.get("http://localhost:8080/buttonprops").then((res)=>{SetPropData(res.data.data)}) // hitting get request to get all the data from backend
    }
    useEffect(()=>{
        get_props();
    },[])
    return (
        <Fragment>
            <div>
                <Button file = {propData}/> 
            </div>
        </Fragment>
    )
}
export default PageTwo;