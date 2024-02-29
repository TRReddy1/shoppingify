import React, { useState } from "react";
import { addProduct, getSingleProduct } from "../api";
import { useDispatch } from "react-redux";
import { addedProduct } from "../features/productSlice";

const AddItems = ({ keys, setShowAddItem }) => {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [image, setImage] = useState("");
  const [cate, setCate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    addProduct(name, cate, note, image)
      .then((res) => {
        return getSingleProduct(res.objectId);
      })
      .then((res) => {
        dispatch(addedProduct(res));
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setCate("");
    setNote("");
    setImage("");
  };

  return (
    <div>
      <div
        style={{
          width: "176px",
          height: "30px",
          marginTop: "34.46px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "30px",
        }}
      >
        Add a new item
      </div>
      <div
        style={{
          marginTop: "33.78px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",

          marginRight: "45px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            width: "40px",
            height: "18px",
            fontWeight: "500",
            lineHeight: "17.5px",
          }}
        >
          Name
        </span>{" "}
        <br />
        <input
          style={{ paddingLeft: "10px" }}
          className="input-boxes"
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "33.78px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",

          marginRight: "45px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            width: "40px",
            height: "18px",
            fontWeight: "500",
            lineHeight: "17.5px",
          }}
        >
          Note(Optional)
        </span>{" "}
        <br />
        <input
          style={{ height: "110.22px", paddingLeft: "10px" }}
          className="input-boxes"
          type="text"
          placeholder="Enter a note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "33.78px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",

          marginRight: "45px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            width: "40px",
            height: "18px",
            fontWeight: "500",
            lineHeight: "17.5px",
          }}
        >
          Image(Optional)
        </span>{" "}
        <br />
        <input
          className="input-boxes"
          type="text"
          placeholder="Enter a url"
          style={{ paddingLeft: "10px" }}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div
        style={{
          marginTop: "33.78px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",

          marginRight: "45px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            width: "40px",
            height: "18px",
            fontWeight: "500",
            lineHeight: "17.5px",
          }}
        >
          Category
        </span>{" "}
        <br />
        <input
          className="input-boxes"
          style={{ paddingLeft: "10px" }}
          type="text"
          placeholder="Enter a Category"
          list="p"
          value={cate}
          onChange={(e) => setCate(e.target.value)}
        />
        <datalist id="p">
          {keys.map((key) => {
            return <option value={key}></option>;
          })}
        </datalist>
      </div>
      <div
        style={{
          width: "309.89px",
          //   height: "30px",
          marginTop: "231.27px",
          // marginLeft: "138.43px",
          marginLeft: "38.49px",

          marginRight: "45px",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "30px",
          display: "flex",
          //   border: "solid",
          justifyContent: "center",
          alignItems: "center",
          //   gap: "143.56px",
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
          onClick={() => setShowAddItem(false)}
        >
          cancel
        </button>
        <button
          className="save-btn"
          style={{ marginLeft: "43.56px", cursor: "pointer" }}
          disabled={!name}
          onClick={handleSubmit}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default AddItems;
