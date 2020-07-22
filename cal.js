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
    $("#backspace").click(function () {
        x = $("#input").val();
        var y=x.slice(0, -1);
        $('#input').val(y);
    });
    $("#btnA").click(function () {
        x = $("#input").val();
        $('#input').val(x+"7");
    });
    $("#btnB").click(function () {
        x = $("#input").val();
        $('#input').val(x+"8");
    });
    $("#btnC").click(function () {
        x = $("#input").val();
        $('#input').val(x+"9");
    });
    $("#btnD").click(function () {
        x = $("#input").val();
        $('#input').val(x+"/");
    });
    $("#btnE").click(function () {
        x = $("#input").val();
        $('#input').val(x+"4");
    });
    $("#btnF").click(function () {
        x = $("#input").val();
        $('#input').val(x+"5");
    });
    $("#btnG").click(function () {
        x = $("#input").val();
        $('#input').val(x+"6");
    });
    $("#btnH").click(function () {
        x = $("#input").val();
        $('#input').val(x+"*");
    });
    $("#btnI").click(function () {
        x = $("#input").val();
        $('#input').val(x+"1");
    });
    $("#btnJ").click(function () {
        x = $("#input").val();
        $('#input').val(x+"2");
    });
    $("#btnK").click(function () {
        x = $("#input").val();
        $('#input').val(x+"3");
    });
    $("#btnL").click(function () {
        x = $("#input").val();
        $('#input').val(x+"+");
    });
    $("#btnM").click(function () {
        x = $("#input").val();
        $('#input').val(x+".");
    });
    $("#btnN").click(function () {
        x = $("#input").val();
        $('#input').val(x+"0");
    });
    $("#btnO").click(function () {
        x = $("#input").val();
        $('#input').val(x+"-");
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


