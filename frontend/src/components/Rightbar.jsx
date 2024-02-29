import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import Quantity from "./Quantity";
import { FaCheck } from "react-icons/fa6";
import {
  addQuantity,
  deletedCart,
  removeQuantity,
} from "../features/cartSlice";
import CancelAndCompleBtns from "./CancelAndCompleBtns";
import Details from "./Details";

const Rightbar = ({ setShowAddItem, showDetails, setShowDetails }) => {
  const shoppingList = useSelector((state) => state.cart);
  const [categoryWised, setCategoryWised] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [listName, setListName] = useState("");
  const [keys, setKeys] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (shoppingList.length > 0) {
      setCategoryWised(
        shoppingList.reduce((accu, curr) => {
          if (!accu.hasOwnProperty(curr.category)) {
            accu[curr.category] = [];
          }
          accu[curr.category].push({
            id: curr.id,
            name: curr.name,
            count: curr.count,
            state: false,
            category: curr.category,
          });
          return accu;
        }, {})
      );
    }
  }, [shoppingList]);

  useEffect(() => {
    if (categoryWised) {
      const keyy = Object.keys(categoryWised);
      setKeys(keyy);
    }
  }, [categoryWised]);

  const handleIncrement = (id) => {
    dispatch(addQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(removeQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(deletedCart(id));
  };

  const handleChecked = (id, category) => {
    setCategoryWised((prev) => {
      return {
        ...prev,
        [category]: prev[category].map((item) => {
          if (item.id === id) {
            return {
              ...item,
              state: !item.state,
            };
          }
          return item;
        }),
      };
    });
  };

  return (
    <>
      {!showDetails ? (
        <div className="rightbar">
          <div className="add-item-block">
            <div>
              <img
                className="bottle"
                src="../../resources/shoppingify-master/source.svg"
                alt="bottle"
              />
            </div>
            <div>
              <p className="add-item-text">Didn't find what you need?</p>
              <button className="add-btn" onClick={() => setShowAddItem(true)}>
                add item
              </button>
            </div>
          </div>
          {shoppingList.length === 0 ? (
            <div>
              <div className="no-items-text">No items</div>
              <div>
                <img
                  className="cart"
                  src="../../resources/shoppingify-master/undraw_shopping_app_flsj 1.svg"
                  alt="cart"
                />
              </div>
            </div>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "301px",
                  marginLeft: "48.39px",
                  marginTop: "43.96px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "30px",
                    width: "149px",
                    height: "30px",
                  }}
                >
                  shopping list
                </div>
                <MdEdit
                  onClick={() => setEditMode(!editMode)}
                  style={{ width: "24px", height: "24px", marginTop: "5px" }}
                />
              </div>
              <div className="list-cart">
                {keys &&
                  keys.map((key) => {
                    return (
                      <>
                        <div className="list-categoryText">{key}</div>
                        {categoryWised[key]?.map((item) => {
                          return (
                            <div className="list-item">
                              <div className="list-itemname">
                                {editMode && (
                                  <>
                                    <input
                                      type="checkbox"
                                      checked={item.state}
                                      onChange={() =>
                                        handleChecked(item.id, item.category)
                                      }
                                      className="checkbox"
                                    />
                                    <span className="checkbox-icon">
                                      {item.state && <FaCheck />}
                                    </span>
                                  </>
                                )}
                                <div
                                  style={{
                                    textDecoration: item.state
                                      ? "line-through"
                                      : "none",
                                  }}
                                >
                                  {item.name}
                                </div>
                              </div>
                              <div>
                                <Quantity
                                  item={item}
                                  increment={handleIncrement}
                                  decrement={handleDecrement}
                                  deleteCart={handleDelete}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })}
              </div>
            </>
          )}
          <div className="save-box" style={{ backgroundColor: "white" }}>
            {!showCancel ? (
              <div className="save-inBtn">
                <input
                  className="input-save"
                  type="text"
                  placeholder="Enter a name"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
                <button
                  className="save-btn"
                  disabled={shoppingList.length === 0}
                  style={{
                    backgroundColor:
                      shoppingList.length === 0
                        ? "rgba(193, 193, 196, 1)"
                        : "rgba(249, 161, 9, 1)",
                  }}
                  onClick={() => setShowCancel(true)}
                >
                  save
                </button>
              </div>
            ) : (
              <CancelAndCompleBtns
                listName={listName}
                setListName={setListName}
                setShowCancel={setShowCancel}
              />
            )}
          </div>
        </div>
      ) : (
        <Details setShowDetails={setShowDetails} />
      )}
    </>
  );
};

export default Rightbar;
