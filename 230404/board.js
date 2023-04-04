var express = require("express")
var app = express();    //서버 만들었음
var fs = require("fs");
var ejs = require("ejs");

//ejs엔진은 views 폴더 아래서 파일을 검색한다
app.set("view engine", ejs);

let boardList = [
    {id:1, title:"제목1", writer:"작성자1", wdate:"20234-04-04"},
    {id:2, title:"제목2", writer:"작성자2", wdate:"20234-04-05"},
    {id:3, title:"제목3", writer:"작성자3", wdate:"20234-04-06"},
    {id:4, title:"제목4", writer:"작성자4", wdate:"20234-04-07"},
    {id:5, title:"제목5", writer:"작성자5", wdate:"20234-04-08"},
]

app.use("/board/list", (request, response)=>{
    response.render("board/board_list.ejs", {boardList:boardList});
    });
