//TODO npm install express --save
//TODO npm install pug --save
//TODO npm install body-parser --save

const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

let users = [
    {
        id: 0,
        name: "Dat",
    },
    {
        id: 1,
        name: "Binh"
    }
];

//! pug - engine
app.set("view engine", "pug");
app.set("views", "./views");

//! body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//! code
app.get("/", (req, res) => {
    res.send("<h1>Home</h1><a href='/users'>User</a>");
});

app.get("/users", (req, res) => {
    res.render("users.pug", {
        users: users,
    })
})

app.get("/users/search", (req, res) => {
    let textSearch = req.query.q.toLowerCase();
    let newUsers = users.filter(function(user){
        return user.name.toLowerCase().indexOf(textSearch) !== -1;
    });
    res.render("users.pug", {
        users: newUsers
    })
})

app.get("/users/:id", (req, res) => {
    var id = parseInt(req.params.id);
    var userView = users.filter(function(user){
        return user.id === id
    });
    res.render("view.pug", {
        user: userView[0]
    })
})

app.post("/users/create", (req, res) => {
    if (req.body.name){
        let user = {
            id: users.length,
            name: req.body.name
        }
        users.push(user);
    }
    res.redirect("/users");
})

app.listen(port, () => {
    console.log(`Server run in port ${port}`);
});