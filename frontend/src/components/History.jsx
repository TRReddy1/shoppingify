import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../api";
import { fetchLists } from "../features/listSlice";
import List from "./List";

const History = () => {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const [yearWise, setYearWise] = useState({});
  const [months, setMonths] = useState([]);

  useEffect(() => {
    getLists().then((res) => dispatch(fetchLists(res.results)));
  }, [dispatch]);

  useEffect(() => {
    if (lists.length > 0) {
      setYearWise(
        lists.reduce((accu, curr) => {
          let date = new Date(curr.createdAt);
          let formatedDate = date.toLocaleString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          if (!accu[formatedDate.slice(3)]) {
            accu[formatedDate.slice(3)] = [];
          }

          accu[formatedDate.slice(3)].push({
            id: curr.objectId,
            name: curr.name,
            status: curr.state,
            createdAt: formatedDate,
          });

          return accu;
        }, {})
      );
    }
  }, [lists]);

  useEffect(() => {
    let monthsData = Object.keys(yearWise);
    setMonths(monthsData);
  }, [yearWise]);

  return (
    <div style={{ width: "67.45%", backgroundColor: "rgb(250, 250, 254)" }}>
      <div
        style={{
          fontSize: "26px",
          fontWeight: "700",
          width: "451px",
          height: "33px",
          lineHeight: "32.5px",
          marginTop: "37.5px",
          marginLeft: "81px",
        }}
      >
        Shopping history
      </div>
      {months?.map((month, index) => {
        return (
          <>
            <div className="list-year" key={index}>
              {month}
            </div>
            {yearWise[month].map((each) => {
              // console.log(each);
              return <List each={each} />;
            })}
          </>
        );
      })}
    </div>
  );
};

export default History;
