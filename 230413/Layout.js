import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; /* 압축버전 min 들어가있는 것을 쓰기 */
import { Outlet, Link, NavLink } from "react-router-dom";

// 화면 구성을 담당할 함수
function Layout(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-warning navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        {/* component가 출력되는 위치 */}
        <Outlet />
      </div>
    </nav>
  );
}

export default Layout;
