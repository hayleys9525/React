let http = require("http");
let fs = require("fs");    //파일읽기
let url = require("url");  //url 분석을 위한 라이브러리

//http:127.0.0.1:4000?name=Tom&age=17

let server = http.createServer( (request, response)=>{
    //console.log(request);
    console.log(request.url);   //전송url
    console.log(request.method); //전송방식

    let rurl = request.url;
    let query = url.parse(rurl, true).query;
    //string 분석 => json객체로 전환
    //파싱한다
    console.log(query);

    if (query.name !== undefined && query.name !== "") {
      response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      response.end(`이름:${query.name} 나이:${query.age}`);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain;charset=utf-8" });
      response.end("잘못된 요청입니다.");
    }

});

server.listen(5000, ()=>{
    console.log("server start http://127.0.0.1:5000");
});

