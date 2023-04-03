let scoreData = [
  { name: "홍길동", kor: 90, eng: 90, mat: 100 },
  { name: "임꺽정", kor: 80, eng: 60, mat: 60 },
  { name: "장길산", kor: 70, eng: 70, mat: 80 },
  { name: "강감찬", kor: 80, eng: 90, mat: 90 },
  { name: "이순신", kor: 100, eng: 100, mat: 100 },
];

// Calculate average for each student and add to the table
let scoreTableBody = document.getElementById("scoreTableBody");
scoreData.forEach((student) => {
  let row = document.createElement("tr");
  let nameCell = document.createElement("td");
  nameCell.textContent = student.name;
  row.appendChild(nameCell);
  let korCell = document.createElement("td");
  korCell.textContent = student.kor;
  row.appendChild(korCell);
  let engCell = document.createElement("td");
  engCell.textContent = student.eng;
  row.appendChild(engCell);
  let matCell = document.createElement("td");
  matCell.textContent = student.mat;
  row.appendChild(matCell);
  let avgCell = document.createElement("td");
  let avg = (student.kor + student.eng + student.mat) / 3;
  avgCell.textContent = avg.toFixed(2);
  row.appendChild(avgCell);
  scoreTableBody.appendChild(row);
});
