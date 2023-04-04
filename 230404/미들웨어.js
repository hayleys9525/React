var express = requires("express")
var fs = require("fs")
var ejs = require("ejs")
var app = express();    //html연결.js

//bodyParse -- npm install bodyParser를 하고 해야 한다.
//새버전에서는 express가 갖고 있다.
//post로 전송할때 request.body에 보낸 정보를 추가해서
//사용이 간편하도록 도와주는 미들웨어이다
app.use(express.urlencoded({extended:false}));

//http://127.0.0.1:4000/gugu?dan=4
//첫번째 미들웨어
app.use((request, response, next)=>{
  //request 브라우저 -> 서버
  //response 서버 -> 브라우저
  //next - 다음함수를 호출한다
  request.name="홍길동";
  response.name="John";
  console.log("aaaaaaaa");
  next();
});

app.get("/a", (request, response, next)=>{
    //request 브라우저 -> 서버
    //response 서버 -> 브라우저
    //next - 다음함수를 호출한다
});

app.get("/b", (request, response, next)=>{
    console.log("bbbbbbbb");
    request.phone="010-0000-0001";
    response.address="서울시 영등포구";
    next();
});

app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html;charset=utf-8"});
    console.log(request.name);
    console.log(response.name);
    console.log(request.phone);
    console.log(request.address);
});

    console.log("a");
    let dan = request.params.dan;  //url에 따라서 : dan
    let result = "";
    for(i=1; i<=9; i++)
    {
        result += `${dan} * ${i} = ${dan*i}<br/>`;
    }
    console.log(result);
    response.writeHead(200, {"Content-type":"text/html"});
    response.end(result);
    //response.end("hello");   //이미 데이터 보내기를 완료했기 때문에 오류발생