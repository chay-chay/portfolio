import React from "react";
import "../App.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import chay from "../images/chay.png";
import { Shake } from "reshake";

const Home = () => {
  return (
    <div id="home">
      <div className="row-home">
        <div className="grid-area home-header">
          <h1
            style={{ paddingBottom: 50, textAlign: "center" }}
            className="heading"
          >
            Hello!{" "}
            <Shake
              h={8}
              v={6}
              r={58}
              dur={300}
              int={26}
              max={100}
              fixed={true}
              fixedStop={false}
              freez={false}
            >
              <img src="https://img.icons8.com/dusk/64/000000/so-so.png" />
            </Shake>
          </h1>

          <h1 className="heading-name">I'm &nbsp;Chayanit &nbsp; McCormick</h1>
        </div>

        <img className="chay grid-area" alt="chay" src={chay} />
      </div>
    </div>
  );
};

export default Home;
