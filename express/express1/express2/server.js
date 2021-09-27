
const express = require('express')

const users = require("./book.json");

const app = express()
// app.use(logger);

// console.log("app:", app);

// get => fetching data from server
// post => to add some data to the server 
//  patch => update some data on server
//  delete => delete data from server

// http://localhost:3000/users

app.get("/", function(req, res){
    res.send("Welcome to Home Page")
})

app.get("/users", logger, function(req, res){
    // res.send({users: [{name: "Arnavi"}, {name: "Mrunmayi"}]})
    res.send(users)
})

app.post("/users", logger, function(req, res){
    // res.send({users: [{name: "Arnavi"}, {name: "Mrunmayi"}]})
    console.log(req.body);
    res.send(users)
})

app.post("/users", validate({name: "required", pages: "reqired"}), function(req, res){
    res.send(users)
})

function validate(data){
    return function(req, res, next){
        Object.keys(data).forEach(function(item){
            if(data[item] === "required"){
                if(! req.query[item]){
                    res.send(`Please add ${item} in the form`)
                }
            }
        })
        next()
    }
}

function logger(req, res, next){
    if(req.query.name === "arnavi"){
        next();
    }
    else{
        res.send("incorrect")
    }
    // console.log("logger here");
    
}
app.listen(2345, function(){
    console.log("listening to port 2345");
}) 
// port must be inbetween 2000 to 10000


// console.log("Heloo are you working ????");
