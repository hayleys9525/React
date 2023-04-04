// 구구단
// 단 : 4
// 확인
// guguform -> guguform.html 출력
// gugu -> 구구단 출력

function showTable() {
  var num = parseInt(document.getElementById("num").value);
  var result = "";
  for (var i = 1; i <= 9; i++) {
    result += num + " x " + i + " = " + num * i + "<br>";
  }
  document.getElementById("output").innerHTML = result;
}
