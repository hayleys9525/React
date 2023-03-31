let http = require("http");
let fs = require("fs"); //파일읽기
let url = require("url"); //url 분석을 위한 라이브러리

//http://127.0.0.1:4000/add?x=4&y=5
//http://127.0.0.1:4000/sub?x=4&y=5
//http://127.0.0.1:4000/userinfo?userid=test&username=Tom

let server = http.createServer((request, response) => {
  //console.log(request);
  //console.log(request.url);   //전송url
  console.log(request.method); //전송방식: GET

  let rurl = request.url;
  let pathname = url.parse(rurl, true).pathname; // /add
  let query = url.parse(rurl, true).query; //{x:4, y:5}

  if (pathname === "/add") {
    let result = Number(query.x) + Number(query.y);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(result.toString());
    response.end();
  } else if (pathname === "/sub") {
    let result = Number(query.x) - Number(query.y);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(result.toString());
    response.end();
  } else if (pathname === "/userinfo") {
    let userId = query.userid;
    let userName = query.username;
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(`User ID: ${userId}\nUser Name: ${userName}`);
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found");
    response.end();
  }
});

server.listen(7000, () => {
  console.log("Server running at http://127.0.0.1:7000/");
});
