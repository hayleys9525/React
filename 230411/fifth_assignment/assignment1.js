import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [math, setMath] = useState("");
  const [total, setTotal] = useState("");
  const [average, setAverage] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
    const total = parseInt(kor) + parseInt(eng) + parseInt(math);
    const average = total / 3;
    setTotal(total);
    setAverage(average);
  };

  return (
    <div>
      <h1>성적 처리 프로그램</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>국어</label>
          <input
            type="text"
            value={kor}
            onChange={(e) => setKor(e.target.value)}
          />
        </div>
        <div>
          <label>영어</label>
          <input
            type="text"
            value={eng}
            onChange={(e) => setEng(e.target.value)}
          />
        </div>
        <div>
          <label>수학</label>
          <input
            type="text"
            value={math}
            onChange={(e) => setMath(e.target.value)}
          />
        </div>
        <button type="submit">제출</button>
      </form>
      {total && average && (
        <div>
          <p>
            {name}의 총점은 {total}이고 평균은 {average}입니다.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
