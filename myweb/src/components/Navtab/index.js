import React from "react";
import "./style.scss";

const Navtab = () => {
  return (
    <div className="Navtab container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="tracau-tab"
                data-toggle="tab"
                href="#tracau"
                role="tab"
                aria-controls="tracau"
                aria-selected="true"
              >
                Tra câu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="tratu-tab"
                data-toggle="tab"
                href="#tratu"
                role="tab"
                aria-controls="tratu"
                aria-selected="false"
              >
                Tra từ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="phudephim-tab"
                data-toggle="tab"
                href="#phudephim"
                role="tab"
                aria-controls="phudephim"
                aria-selected="false"
              >
                Phụ đề phim
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="video-tab"
                data-toggle="tab"
                href="#video"
                role="tab"
                aria-controls="video"
                aria-selected="false"
              >
                Video
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="hinhanh-tab"
                data-toggle="tab"
                href="#hinhanh"
                role="tab"
                aria-controls="hinhanh"
                aria-selected="false"
              >
                Hình ảnh
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tracau"
              role="tabpanel"
              aria-labelledby="home-tab"
              style={{ height: "500px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div
              className="tab-pane fade"
              id="tratu"
              role="tabpanel"
              aria-labelledby="profile-tab"
              style={{ height: "500px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div
              className="tab-pane fade"
              id="phudephim"
              role="tabpanel"
              aria-labelledby="contact-tab"
              style={{ height: "500px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div
              className="tab-pane fade"
              id="video"
              role="tabpanel"
              aria-labelledby="profile-tab"
              style={{ height: "500px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div
              className="tab-pane fade"
              id="hinhanh"
              role="tabpanel"
              aria-labelledby="contact-tab"
              style={{ height: "500px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtab;
