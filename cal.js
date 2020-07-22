// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './App';

var x,res;
$(document).ready(function () {
    $("#button").click(function () {
        //   $("#cal").text("Hello world!");
        x = $("#input").val();
        fetchTopFive('javascript');
    });
    $("#clear").click(function () {
        $('#input').val("");
    });
});

async function fetchTopFive(sub) {
    const URL = "https://api.mathjs.org/v4/?expr="+encodeURIComponent(x);
    try{
        const fetchResult = fetch(URL)
        const response = await fetchResult;
        const jsonData = await response.json();
        $("#input").val(jsonData)
        console.log(jsonData);
    }
    catch{
        console.log("error")
        $("#input").val("error");
    }

};


