let http = require("http");
let fs = require("fs");
let ejs = require("ejs"); //npm install ejs
// ejs를 global로 깔아줘도 계속 오류가 난다...이것은 그냥 매번 디렉토리 바뀔 때마다 새로 설치해줘야함.

let boardList = [
  { id: 1, title: "제목1", writer: "작성자1", wdate: "2023-0403" },
  { id: 2, title: "제목2", writer: "작성자2", wdate: "2023-0404" },
  { id: 3, title: "제목3", writer: "작성자3", wdate: "2023-0403" },
  { id: 4, title: "제목4", writer: "작성자4", wdate: "2023-0405" },
  { id: 5, title: "제목5", writer: "작성자5", wdate: "2023-0403" },
];

let server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  fs.readFile("./html/test.html", "utf-8", (error, data) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/html;charset=utf-8" });
      response.end("error"); //에러상황임.
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.end(
      ejs.render(data, {
        //test에서  <%=name%>을 바꿔치기해서 넣어줄 것임.
        name: "Tom",
        age: 23,
        address: "서울시 관악구",
        limit: 10,
      })
    ); //파일 내용을 브라우저로 보낸다.
    //ejs 템플릿 엔진을 통해서 html과 nodejs의 데이터를 결합한다.
  });
});

server.listen(4000, () => {
  console.log("server start http://127.0.0.1:4000");
});

//npm install nodemon
