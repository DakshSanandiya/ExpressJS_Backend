const express = require("express");
const { default: verifytoken } = require("./auth/jwtauth");

const app = express();

app.use(express.json());





//for login without auth

app.post("/auth/login", (req, res) => {
    const { email, password } = req.body;
    res.send(`RES : email : ${email} , password : ${password} \n Login successfully!`);
});








// for users

//create user
app.post("/api/users", verifytoken, (req, res) => {

    // logic for add user in database here

    res.send("user created successfully!");

});

// get all users
app.get("/api/users", verifytoken, (req, res) => {
    data = [
        {
            "id": 0,
            "name": "string",
            "email": "user@example.com",
            "role": {
                "id": 0,
                "name": "MANAGER"
            },
            "created_at": "2026-02-24T03:57:44.506Z"
        }
    ]; // fatch data from database here


    res.send(data);

});


















// for tickets


//get all tickets
app.get("/api/tickets", verifytoken, (req, res) => {
    data = [
        {
            "id": 0,
            "title": "string",
            "description": "string",
            "status": "OPEN",
            "priority": "LOW",
            "created_by": {
                "id": 0,
                "name": "string",
                "email": "user@example.com",
                "role": {
                    "id": 0,
                    "name": "MANAGER"
                },
                "created_at": "2026-02-24T04:01:49.909Z"
            },
            "assigned_to": {
                "id": 0,
                "name": "string",
                "email": "user@example.com",
                "role": {
                    "id": 0,
                    "name": "MANAGER"
                },
                "created_at": "2026-02-24T04:01:49.909Z"
            },
            "created_at": "2026-02-24T04:01:49.909Z"
        }
    ]; // fatch data from database here


    res.send(data);

});

//create ticket
app.post("/api/tickets", verifytoken, (req, res) => {

    // logic for add ticket in database here

    res.send("ticket created successfully!");

});

//delete ticket
app.delete("/api/tickets/:id", verifytoken, (req, res) => {

    //logic for delete tickets in database

    res.send(`ticket is deteled successfully!`);
});

//update ticket assign
app.patch("/api/tickets/:id/assign", verifytoken,(req,res)=>{

    //newdata :
    const data = req.body;

    //logic to update old data with new data at database

    res.send("update assign successfully! \n new data : "+data);
});

//update ticket status
app.patch("/api/tickets/:id/status", verifytoken,(req,res)=>{

    //newdata :
    const data = req.body;

    //logic to update old data with new data at database

    res.send("update status successfully! \n new data : "+data);

});




















//for comments

//create comments for ticket id
app.post("/api/tickets/:id/comments", verifytoken, (req, res) => {
    //logic to create comment in ticket id

    const data = req.body;
    res.send("create comment successfully! \n data : " + data);

});

//get all comments for ticket id
app.get("/api/tickets/:id/comments", verifytoken, (req, res) => {
    data = [
        {
            "id": 0,
            "comment": "string",
            "user": {
                "id": 0,
                "name": "string",
                "email": "user@example.com",
                "role": {
                    "id": 0,
                    "name": "MANAGER"
                },
                "created_at": "2026-02-24T04:39:00.998Z"
            },
            "created_at": "2026-02-24T04:39:00.998Z"
        }
    ]; // logic to fatch data from database

    res.send(data);

});

//delete comment
app.delete("/api/comments/:id", verifytoken,(req,res)=>{
    //logic to delete comment in database at id

    res.send("comment Delete successfully!");

});

//update comments
app.patch("/api/comments/:id", verifytoken,(req,res)=>{

    //newdata :
    const data = req.body;

    //logic to update old data with new data at database

    res.send("update comments successfully! \n new data : "+data);
});


app.listen(3000, () => {
    console.log("server started at port 3000");
});