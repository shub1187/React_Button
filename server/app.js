const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./model-connection/connection")
const Props = require("./model-connection/PropsModel")
const cors = require("cors")

// Writing middlwares
app.use(express.json());
app.use(cors());

// Creating post API to create a new document for a button
app.post("/createbutton",async (req,res)=>{
    try{
        const newButton = await Props.create(req.body);
        res.json({status:"Button Created Successfully",data:newButton})
    }catch(e){
        res.json({status:"Button Creation Failed"})
    }
})

// Creating Get API to get all the data from backend
app.get("/buttonprops",async (req,res)=>{
    try{
        const allProps = await Props.find();
        res.json({status:"Successfull",data:allProps})
    }catch(e){
        res.json({status:"Could not find props"})
    }
})

// Listening to port
app.listen(port,()=>{console.log("Server is up at 8080")})
