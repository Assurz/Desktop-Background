const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.sendFile(__dirname + "/index.html");
    var options = {
        url: "https://api.unsplash.com/photos/random/?client_id=0851383d9bcd52d9c1d1725d5eb12c0eb4d38b786dd83a0995ed032725e919f1&orientation=landscape",
        method: "GET",    
    };

    request(options, function(error, response, body){

        var data = JSON.parse(body);
        var picture = data.urls.regular;

        res.send("<img width='100%' height='100%' src='" + picture + "'>")
        // `<img src="${picture}" >`

    })

});   

app.listen(3000, function() {
    console.log("server is running on a port 3000.");
});
