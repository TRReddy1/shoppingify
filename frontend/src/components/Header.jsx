import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const Header = ({ searchText, setSearchText }) => {
  return (
    <div className="header-items">
      <div
        style={{
          fontSize: "26px",
          width: "451px",
          height: "66px",
          lineHeight: "32.5px",
          fontWeight: "500",
          marginTop: "37.5px",
          marginLeft: "81px",
        }}
      >
        <span style={{ fontWeight: "700", color: "rgba(249, 161, 9, 1)" }}>
          Shoppingify{" "}
        </span>
        allows you take your shopping list wherever you go
      </div>
      <div className="search-bar">
        <div
          style={{
            position: "absolute",
            marginLeft: "10px",
            marginTop: "15px",
            height: "26px",
            width: "26px",
          }}
        >
          <IoSearchSharp size={18} />
        </div>
        <input
          style={{
            // position: "absolute",
            width: "275.61px",
            height: "50.92px",
            borderRadius: "12px",
            border: "none",
            paddingLeft: "36px",
          }}
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {/* <input type="text" /> */}
    </div>
  );
};

export default Header;
