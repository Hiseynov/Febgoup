import React, { useState } from "react";
import { Link } from "react-router-dom";
import DateComponent from "../components/DateComponent";
import { dates } from "../data/data";
// import NewsBlock from "./NewsBlock";

function DateGroup() {

  return (
    <>
      <div id="Blog">
        <div className="Blog-container">
          <div className="Blog-container-top">
            <p>
              <Link to={"/"}>Home</Link>{" "}
              <i className="fa-solid fa-chevron-right"></i> <span>Blog</span>
            </p>
            <h2>BLOG FOR PACKAGING KNOWLEDGE & ADVICE</h2>
            <div className="Blog-container-button">
              <div className="Blog-container-left">
                <img src="src\img\News.png" alt="" />
              </div>
              <div className="Blog-container-right">
                <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel reiciendis libero id molestias aliquid minima, tempora repellendus tenetur nihil laborum at atque eligendi quos inventore quam illum. Architecto cum suscipit perspiciatis harum rerum culpa dolorem, beatae iste nobis ipsum velit sapiente commodi eaque aperiam ratione, alias libero incidunt, cumque est ipsa veniam? Ullam repellendus, cupiditate magni unde fuga recusandae corporis nisi deserunt aliquam illo, laborum dignissimos voluptates eligendi ea dolorum! Nesciunt tenetur facilis laborum temporibus ipsum, esse iusto odio vel!
                </p>
              </div>
            </div>
          </div>

          <DateComponent dates={dates}></DateComponent>
        </div>
      </div>
    </>
  );
}

export default DateGroup;
