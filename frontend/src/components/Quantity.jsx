import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Quantity = ({ item, increment, decrement, deleteCart }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {showMore ? (
        <div
          style={{
            display: "flex",
            width: "173.56px",
            height: "44.9px",
            // border: "solid",
            borderRadius: "12px",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: "-5px",
          }}
        >
          <button
            style={{
              width: "37.07px",
              height: "44.9px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "rgba(249, 161, 9, 1)",
              color: "white",
            }}
            onClick={() => {
              deleteCart(item.id), setShowMore(!showMore);
            }}
          >
            <MdDeleteOutline />
          </button>

          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "rgba(249, 161, 9, 1)",
              width: "24px",
              height: "24px",
            }}
            onClick={() => decrement(item.id)}
            disabled={item.count === 0}
          >
            <FaMinus />
          </button>

          <div className="count-pill" onClick={handleShowMoreToggle}>
            {item.count} pcs
          </div>

          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "rgba(249, 161, 9, 1)",
              width: "24px",
              height: "24px",
            }}
            onClick={() => increment(item.id)}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <div className="count-pill" onClick={handleShowMoreToggle}>
          {item.count} pcs
        </div>
      )}
    </>
  );
};

export default Quantity;
