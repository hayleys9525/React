import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverIP } from "../../CommonUtil";
import { Link, useNavigate, useParams } from "react-router-dom";

function HeroWrite(props){
    let {id} = useParams();  //보내는 쪽에서 json객체로 보냄
    let history=useNavigate();

    const [heroName, setHeroName]=useState("");
    const [heroDesc, setHeroDesc] = useState("");

    useEffect(()=>{
        console.log("id", id);
        async function loadData(){
          let results = await axios.get(serverIP+"/hero/view"+id);
          console.log(results.data.hero.heroName);
          console.log(results.data.hero.heroDesc);

          setHeroName(results.data.hero.hero_name);
          setHeroDesc(results.data.hero.hero_desc);
        }
        if(id!=undefined)  //write가 아니고 view로 호출할때
           loadData();
       /*
       window.onload 
       BoardWrite 컴포넌트가 /board/write 일때는 id에는 undefined가 오고
        /board/view/1 id에는 파라미터값이 저장된다. 
        */

    }, []);
    const nameChange=(e)=>{
        setHeroName(e.target.value);
    }
    const descChange = (e) => {
      setHeroDesc(e.target.value);
    };

    //서버로 전송하기
    const postData = () => {
      let data = { "hero_name": heroName, "hero_desc": heroDesc };
      axios.post(serverIP+"/hero/write", data)
      .then( (res)=>{
          console.log(res.data);
          history("/board/list");
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    
    return (
      <div className="container">
        <h1>게시판 글쓰기</h1>
        <table className="table table-hover" style={{ marginTop: "30px" }}>
          <colgroup>
            <col width="25%" />
            <col width="*" />
          </colgroup>

          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="제목을 입력하세요"
                    name="title"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <div className="input-group mb-3" style={{marginTop:"13px"}}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="이름을 입력하세요"
                    onChange={descChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <div clasNames="input-group mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="contents"
                  ></textarea>
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="container mt-3" style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-secondary" onclick="goWrite()">
            등록
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onclick="goCancel()"
          >
            취소
          </button>
          &nbsp;&nbsp;
        </div>
      </div>
    );
}

export default HeroWrite;