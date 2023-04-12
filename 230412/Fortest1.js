//Myhome1/src/component/ForTest1.js
import React, { useState } from "react";

function ForTest1(props) {
  const [fruitList] = useState([
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
    "Apple",
    "Pear",
    "Plum",
    "berries",
  ]);
  const goSelect = (index) => {
    alert(fruitList[index]);
  };
  return (
    <div>
      <ul>
        {fruitList.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="#none"
                onClick={() => {
                  goSelect(index);
                }}
              >
                {" "}
                {item}{" "}
              </a>
              {/* 앵커태그 #none의 장점은 링크태그를 눌러도 맨 위로 안 올라감. 
웹페이지에 데이터를 입력하다가 뭔가를 쓰려고 하면 화면이 맨 위로 올라가는 경우가 있음..(링크태그의 특징임.) */}
              {/* onClick={()=>{goSelect(index)}
무조건 태그는 함수주소를 저렇게 매개변수로 전달해줘야함. 뭔가 함수를 호출하고자 한다면 말이지. */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ForTest1;
