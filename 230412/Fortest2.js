//Myhome1/src/component/ForTest1.js
import React, {useState} from "react";

function ForTest1(props){
    const [fruitList, setFruitList] = useState(["Apple", "Pear", "Plum", "berries"]);
    const [fruit, setFruit] = useState("");
//(2nd Step) input Tag 에서 값을 입력하면, fruit 변수에 값을 저장한다.
    const onChange= (e)=>{
        setFruit(e.target.value);
    }
    //추가버튼 : 추가버튼을 누르면 fruit 변수의 값을 fruitList에 추가합니다.
    const goAppend = ()=>{
        // 배열의 push함수를 리액트에선 쓸 수 없습니다. 원래 배열에 데이터 추가...
        // 배열 자체를 새로 만들어서 바꿔치기를 하는 것이 리액트의 방법.
        // push : 원래 배열 메모리에 추가하는 것. 
        // concat : 새로 배열을 만들어서 원래 배열 메모리 내용을 복사하고 그 위에 추가 데이터 만듬. 
        setFruitList(fruitList.concat(fruit));
        setFruit(""); //Fruit 메모리 clear.
    }
    const goSelect = (index)=>{
        alert(fruitList[index]);
    }
    return(
        <div>
            <input type="text" onChange={onChange} value={fruit} />
{/* 입력을 textBox에 하고.....text값을....넣어주고 Append를 호출하면..(1) */}
            <button type="button" onClick={goAppend}> Add up! </button>
            <ul>
            {
                fruitList.map((item,index)=>{
                    return(
                    <li key={index}>
                        <a href="#none" onClick={()=>{goSelect(index)}}>  {item}  </a>
{/* 앵커태그 #none의 장점은 링크태그를 눌러도 맨 위로 안 올라감. 
웹페이지에 데이터를 입력하다가 뭔가를 쓰려고 하면 화면이 맨 위로 올라가는 경우가 있음..(링크태그의 특징임.) */}
{/* onClick={()=>{goSelect(index)}
무조건 태그는 함수주소를 저렇게 매개변수로 전달해줘야함. 뭔가 함수를 호출하고자 한다면 말이지. */}
                    </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default ForTest1;