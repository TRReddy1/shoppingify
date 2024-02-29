import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";
import { addedCart, deletedCart } from "../features/cartSlice";
import { deleteProduct } from "../api";
import { deletedProduct } from "../features/productSlice";

const Details = ({ setShowDetails }) => {
  const productDetails = useSelector((state) => state.products);
  const shoppingList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToList = () => {
    const found = shoppingList.find(
      (item) => item.id === productDetails.details.objectId
    );
    if (!found) {
      dispatch(
        addedCart({
          id: productDetails.details.objectId,
          count: 1,
          category: productDetails.details.category,
          name: productDetails.details.product_name,
        })
      );
    }
    setShowDetails(false);
  };

  const handleDelete = () => {
    deleteProduct(productDetails.details.objectId).then((res) => {
      if (res === 200) {
        dispatch(deletedProduct(productDetails.details.objectId));
        dispatch(deletedCart(productDetails.details.objectId));
      }
    });
    setShowDetails(false);
  };

  return (
    <div className="details-bar">
      <div>
        <button
          onClick={() => setShowDetails(false)}
          className="details-backbtn"
        >
          <FaArrowLeftLong /> back
        </button>
      </div>
      <div>
        <img
          className="details-img"
          src={productDetails.details.image_url}
          alt="image"
        />
      </div>
      <div>
        <div className="details-headings">name</div>
        <div className="details-text" style={{ fontSize: "24px" }}>
          {productDetails.details.product_name}
        </div>
      </div>
      <div>
        <div className="details-headings">Category</div>
        <div className="details-text">{productDetails.details.category}</div>
      </div>
      <div>
        <div className="details-headings">note</div>
        <div className="details-text" style={{ width: "296.23px" }}>
          {productDetails.details.description}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   border: "solid",
          paddingTop: "120px",
          marginTop: "34.87px",
          marginLeft: "39.56px",
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
          onClick={handleDelete}
        >
          delete
        </button>
        <button
          className="save-btn"
          style={{ marginLeft: "43.56px", cursor: "pointer" }}
          onClick={handleAddToList}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Details;
