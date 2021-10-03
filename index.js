let express = require('express')
let app = express()

//Hello express JS
app.get("/", (req, res)=>{
    res.send("<h1> Hello express JS</h1>")
})

//user return get request
//http://localhost:8088/name?firstname=Lesya&lastname=Klepak
app.get("/name", (req,res)=>{
    res.send(req.query)
})

//user return post request
// we  cannot call post method from browser, instead we can use post man
app.post("/name", (req,res)=>{
    let firstname = req.query.firstname
    let lastname = req.query.lastname

// create js object
response = {
    status:"success",
    firstname,
    lastname
}
    res.send(response)
})

let server = app.listen(8088, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
}) 