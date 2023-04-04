








//사용이 간편하도록 도와주는 미들웨어이다
app.use(express.urlencoded({extended:false}));

app.get("/input", (request, response)=>{
    fs.readFile("./html/input/html", "utf-8", (err, data)=>{
        response.writeHead(200, {"Content-type":"text/html"});
        response.end(ejs.render(data));
    })
});

app.get("/login", (request, response)=>{
    let userid = request.query.userid;   //input태그의 name속성
    let password = request.query.password;

    if(userid=="test" && password=="1234")
    response.send("login success");
    else
    response.send("login fail");
});

app.get("/calc", (request, response)=>{
    let x = parseInt(request.query.x);   //input태그의 name속성
    let y = parseInt(request.query.y);
    let operator = parseInt(request.query.operator);

    if(operator=="1")
    response.send(`${x} + ${y} = ${x+y}`);
    else if(operator=="2")
    response.send(`${x} - ${y} = ${x-y}`);
    else if(operator=="3")
    response.send(`${x} * ${y} = ${x*y}`);
    else
    response.send(`${x} / ${y} = ${x/y}`);
});
app.use((request, response)=>{
    response.writeHead(200, {"Content-type" : "text/html"});
})