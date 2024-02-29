import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import { getLists } from "../api";
import lodash from "lodash";
import Chart from "./Chart";

const Charts = () => {
  const [lists, setLists] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [categorized, setCategorized] = useState([]);
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    getLists().then((res) => setLists(res.results));
  }, []);

  useEffect(() => {
    let allItems = [];
    if (lists.length > 0) {
      lists?.map((list) => {
        allItems = allItems.concat(list.items);
      });
    }

    const groupedData = grouped("name", allItems);
    const alltotal = groupedData.reduce((accu, curr) => {
      return (accu += curr.count);
    }, 0);
    setTotal(alltotal);

    setData(groupedData.slice(0, 3));

    const groupCategory = grouped("category", allItems);
    setCategorized(groupCategory.slice(0, 3));

    const monthCounts = {};
    lists.forEach((list) => {
      const createdAt = new Date(list.createdAt);
      const month = createdAt.toLocaleString("en-US", { month: "short" });
      monthCounts[month] = (monthCounts[month] || 0) + total;
    });
    // console.log(monthCounts);
    let monthlyCountsData = Object.entries(monthCounts).map(
      ([month, count]) => ({ month, count })
    );

    if (monthlyCountsData.length < 6) {
      monthlyCountsData = [
        { month: "Jan", count: 0 },
        ...monthlyCountsData,
        // { month: "February", count: 40 },
        // { month: "Mar", count: 0 },
        { month: "Apr", count: 0 },
        { month: "May", count: 0 },
        { month: "Jun", count: 0 },
        { month: "Jul", count: 0 },
        { month: "Aug", count: 0 },
        { month: "Sep", count: 0 },
        { month: "Oct", count: 0 },
        { month: "Nov", count: 0 },
        { month: "Dec", count: 0 },
      ];
    }
    // console.log(monthlyCountsData);

    setGraphs(monthlyCountsData);
  }, [lists]);

  return (
    <div className="charts-main">
      <div className="top-box">
        <div className="top-items top-text">
          top items
          {data?.map((d, index) => {
            let width = ((d.count / total) * 100).toFixed(2);
            return <ProgressBar key={index} name={d.name} width={width} />;
          })}
        </div>
        <div className="top-categories top-text">
          top categories
          {categorized?.map((d, index) => {
            let width = ((d.count / total) * 100).toFixed(2);
            return <ProgressBar key={index} name={d.name} width={width} />;
          })}
        </div>
      </div>
      <div
        className="top-text"
        style={{ marginLeft: "100px", marginTop: "20px" }}
      >
        Monthly Summary
      </div>
      <div
        style={{
          // border: "solid",
          height: "302px",
          width: "768px",
          marginLeft: "80px",
          marginTop: "60px",
        }}
      >
        <Chart graphs={graphs} />
      </div>
    </div>
  );
};

export default Charts;

const grouped = (str, allItems) => {
  return lodash
    .chain(allItems)
    .groupBy(str)
    .map((values, key) => ({
      name: key,
      count: lodash.sumBy(values, "count"),
    }))
    .value()
    .sort((a, b) => b.count - a.count);
};
