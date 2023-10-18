import React from "react";
import { useSelector } from "react-redux";
import { FiMoreHorizontal } from "react-icons/fi";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  const {  user } = useSelector((state) => state.ticketSelectSlice );
  return (
    <div className="container">
      <div className="cardH2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        {!user && (
          <div className="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="logo"
            />
          </div>
        )}

        <div className="status"></div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <FiMoreHorizontal/>
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span>●</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
