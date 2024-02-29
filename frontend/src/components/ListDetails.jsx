import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { getList } from "../api";
import { useSelector } from "react-redux";

const ListDetails = () => {
  const lists = useSelector((state) => state.lists);
  const { listId } = useParams();
  const [categoryWised, setCategoryWised] = useState({});
  const [keys, setKeys] = useState([]);
  const [list, setList] = useState({});
  // const [list, setList] = useState(
  //   lists.filter((list) => list.objectId === listId)[0]
  // );
  const navigate = useNavigate();

  useEffect(() => {
    getList(listId).then((res) => {
      // console.log("before", list);
      setList(res);
      // console.log("after", list);
    });
  }, [listId]);

  useEffect(() => {
    if (Object.keys(list).length !== 0) {
      setCategoryWised(
        list?.items.reduce((accu, curr) => {
          if (!accu.hasOwnProperty(curr.category)) {
            accu[curr.category] = [];
          }
          accu[curr.category].push({
            name: curr.name,
            count: curr.count,
          });
          return accu;
        }, {})
      );
    }
  }, [list]);

  useEffect(() => {
    if (categoryWised) {
      let keyy = Object.keys(categoryWised);
      setKeys(keyy);
    }
  }, [categoryWised]);

  let date = new Date(list?.createdAt);
  let formatedDate = date.toLocaleString("en-IN", {
    year: "numeric",
    day: "numeric",
    weekday: "short",
    month: "short",
  });

  return (
    <div style={{ width: "66%", backgroundColor: "rgb(250, 250, 254)" }}>
      <div>
        <button className="details-backbtn" onClick={() => navigate(-1)}>
          <FaArrowLeftLong /> back
        </button>
      </div>
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
        {list.name}
      </div>
      <div
        className="list-calender"
        style={{ marginLeft: "81px", marginTop: "17.5px" }}
      >
        {formatedDate}
      </div>
      <div className="products-list">
        {keys.map((key) => {
          return (
            <div className="sublist">
              <div className="categoryText">{key}</div>
              <div className="itemsList" style={{ marginBottom: "30px" }}>
                {categoryWised[key].map((each) => {
                  return (
                    <div className="product">
                      <div className="product-inner">
                        <div style={{ fontSize: "16px", fontWeight: "500" }}>
                          {each.name}
                        </div>
                        <div
                          style={{
                            color: "rgba(249, 161, 10, 1)",
                            fontSize: "12px",
                            fontWeight: "700",
                          }}
                        >
                          {each.count + " pcs"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListDetails;
