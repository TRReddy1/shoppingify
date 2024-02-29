import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { BsCalendar4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const List = ({ each }) => {
  const navigate = useNavigate();
  //   console.log(each);
  return (
    <div className="list-card">
      <div className="list-name">{each.name}</div>
      <div className="list-details">
        <div className="list-calender">
          <BsCalendar4 size={"24px"} /> {each.createdAt}
        </div>
        <div
          className="list-status"
          style={{
            color:
              each.status === "completed"
                ? "rgba(86, 204, 242, 1)"
                : "rgba(235, 87, 87, 1)",
          }}
        >
          {each.status}
        </div>
        <div>
          <FaChevronRight
            color="rgba(249, 161, 9, 1)"
            onClick={() => navigate(`/history/${each.id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
