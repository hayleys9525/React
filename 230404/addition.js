function add() {
  var x = parseInt(document.getElementById("x").value);
  var y = parseInt(document.getElementById("y").value);
  var result = x + y;
  alert("Addition result: " + result);
}

if (req.url == "/add") {
  var x = 4;
  var y = 5;
  var result = x + y;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("/add " + x + "+" + y + " = " + result);
  res.end();
}
