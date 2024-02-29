import React from "react";
import { FaPlus } from "react-icons/fa6";
import { addQuantity, addedCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../api";
import { productDetails } from "../features/productSlice";

const Item = ({ product, setShowDetails }) => {
  const shoppingList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!shoppingList.includes(product)) {
      dispatch(addedCart(product));
    }
  };

  const handleClick = () => {
    setShowDetails(true);
    getSingleProduct(product.id).then((res) => dispatch(productDetails(res)));
  };

  return (
    <div className="product">
      <div className="product-inner">
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {product.name}
        </div>
        <div onClick={handleAddToCart}>
          <FaPlus size={12} style={{ paddingTop: "3px" }} />
        </div>
      </div>
    </div>
  );
};

export default Item;
