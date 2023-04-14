import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; /* 압축버전 min 들어가있는 것을 쓰기 */
import axios from "axios";
import { SERVERIP, serverIP } from "../../CommonUtil";
import { Outlet, Link, NavLink } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../../page.css";
import { Route } from "react-router-dom";


// 화면 구성을 담당할 함수
function BoardList(props) {
  const [boardList, setBoardList] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [pg, setPg] = useState(0);

  const [loading, setLoading] = useState(false);

  const loadData = async (pg) => {
    const url = serverIP + "/rest_board/list/" + pg;
    await axios
      .get(url)
      .then((res) => {
        let totalCnt = res.data.totalCnt;
        let pg = res.data.pg;
        let boardList = res.data.boardList;
        console.log("데이터 전체 갯수: ", totalCnt);
        console.log("현재 페이지: ", pg);
        console.log("데이터: ", boardList);

        setTotalCnt(totalCnt);
        setPg(pg);
        setBoardList(boardList);

        setLoading(true);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData(2);
  }, []);

  const goPage = (pg) => {
    setPg(pg);
    loadData(pg);
  };

  return (
    <div>
      <div className="container">
        <h2>게시판 목록</h2> <br />
        <div className="input-group mb-3" style={{ marginTop: "20px" }}>
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            선택하세요
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                제목
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                내용
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                제목+내용
              </a>
            </li>
          </ul>
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-secondary" type="submit">
            검색
          </button>
        </div>
        <table className="table table-hover ">
          <colgroup>
            <col width="8%" />
            <col width="*" />
            <col width="14%" />
            <col width="14%" />
          </colgroup>
          <thead className="table-secondary">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {loading === true
              ? boardList.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>
                        <Link to={"/rest_board/view/" + item.id}>
                          {item.title}
                        </Link>
                      </td>
                      <td>{item.username}</td>
                      <td>{item.wdate}</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
      <Pagination
        activePage={pg} // 현재 실행 중인 페이지 ...
        itemsCountPerPage={10} // 한 페이지당 보여줄 라인 수 ...
        totalItemsCount={totalCnt}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={goPage}
        firstPageText={"<<"}
        lastPageText={">>"}
      ><div>
        <Link className="btn btn-danger" to="/board/write">글쓰기</Link>
        </div>
        </Pagination>

      <div>
        <br />
        <Link className="btn btn-dark" to="/board/write">
          글쓰기
        </Link>
      </div>
      {/* <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default BoardList;
