import React from "react";
import CancelModal from "./CancelModal";
import { useDispatch } from "react-redux";
import { addedList } from "../features/listSlice";
import { emptyCart } from "../features/cartSlice";
import { addList, getList } from "../api";

const CancelAndCompleBtns = ({ listName, setListName, setShowCancel }) => {
  const dispatch = useDispatch();
  const handleComplete = () => {
    addList(
      listName,
      "completed",
      JSON.parse(localStorage.getItem("cartState"))
    )
      .then((res) => getList(res.objectId))
      .then((res) => dispatch(addedList(res)));
    setListName("");
    dispatch(emptyCart());
    setShowCancel(false);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "solid",
        marginTop: "34.87px",
        marginLeft: "39.56px",
      }}
    >
      <CancelModal
        listName={listName}
        setListName={setListName}
        setShowCancel={setShowCancel}
      />
      <button
        className="save-btn"
        style={{
          marginLeft: "43.56px",
          cursor: "pointer",
          backgroundColor: "rgba(86, 204, 242, 1)",
        }}
        onClick={handleComplete}
      >
        complete
      </button>
    </div>
  );
};

export default CancelAndCompleBtns;
