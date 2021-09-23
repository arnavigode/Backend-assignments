
const express = require('express')

const book = require("./book.json");

const app = express()
// app.use(logger);

// console.log("app:", app);

app.get("/", function(req, res){
    res.send("hello there")
})

app.get("/book", logger, function(req, res){
    // res.send({book: [{name: "Arnavi"}, {name: "Mrunmayi"}]})
    res.send(book)
})

app.post("/book", logger, function(req, res){
    // res.send({book: [{name: "Arnavi"}, {name: "Mrunmayi"}]})
    console.log(req.body);
    res.send(book)
})

app.post("/book", validate({author: "required", bookName: "reqired", pages: "optional"}), function(req, res){
    res.send(book)
})
app.delete("/book", validate({author: "required", bookName: "reqired", pages: "optional"}), function(req, res){
    Object.keys(data).forEach(function(item){
        if(data[item] === "Ludovico Edis"){
            res.send(book)
        }
        })
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
        console.log(`api_requested_by: "${req.query.name}"`);
        next();
    }
    if(req.query.book === "secret"){
        console.log(`"Book": "${req.query.book}"`);
        next();
    }
    else{
        res.send("Insert valid book name")
    }
    // console.log("logger here");
    
}
app.listen(2611, function(){
    console.log("listening to port 2611");
}) 
// port must be inbetween 2000 to 10000


// console.log("Heloo are you working ????");
