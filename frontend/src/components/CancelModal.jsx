import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css"; // Import your CSS file for styling
import { useDispatch } from "react-redux";
import { addedList } from "../features/listSlice";
import { emptyCart } from "../features/cartSlice";
import { addList, getList } from "../api";

const CancelModal = ({ listName, setListName, setShowCancel }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleYes = () => {
    addList(
      listName,
      "cancelled",
      JSON.parse(localStorage.getItem("cartState"))
    )
      .then((res) => {
        return getList(res.objectId);
      })
      .then((res) => {
        dispatch(addedList(res));
      });
    setListName("");
    setIsOpen(false);
    dispatch(emptyCart());
    setShowCancel(false);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "white",
          border: "none",
          width: "50px",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={toggleModal}
      >
        cancel
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: "24px",
                  lineHeight: "30px",
                  fontWeight: "500",
                  marginTop: "33.25px",
                  marginLeft: "38.5px",
                  width: "410px",
                  height: "60px",
                }}
              >
                Are you sure that you want to cancel this list?
              </div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  height: "24px",
                  width: "24px",
                  marginTop: "18.25px",
                  cursor: "pointer",
                }}
                onClick={closeModal}
              >
                <IoMdClose size={"24px"} />
              </button>
            </div>
            <div
              style={{
                marginTop: "35.63px",
                marginLeft: "316px",
              }}
            >
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  width: "50px",
                  height: "20px",
                  cursor: "pointer",
                }}
                onClick={closeModal}
              >
                cancel
              </button>
              <button
                className="save-btn"
                style={{
                  marginLeft: "43.56px",
                  cursor: "pointer",
                  backgroundColor: "rgba(235, 87, 87, 1)",
                }}
                onClick={handleYes}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelModal;
