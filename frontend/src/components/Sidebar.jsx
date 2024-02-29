import { FaListUl } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="../../resources/shoppingify-master/logo.svg" alt="logo" />
      </div>

      <div className="sidebar-items">
        <NavLink to={"/"}>
          <div
            style={{
              height: "26px",
              width: "26px",
              marginLeft: "30.96px",
              color: "black",
            }}
          >
            <FaListUl size={18} />
          </div>
        </NavLink>

        <NavLink to={"/history"}>
          <div
            style={{
              height: "26px",
              width: "26px",
              marginLeft: "25px",
              color: "black",
              transform: "scaleX(-1)",
            }}
          >
            <IoIosRefresh size={18} />
          </div>
        </NavLink>
        <NavLink to={"/charts"}>
          <div
            style={{
              height: "26px",
              width: "26px",
              marginLeft: "31px",
              color: "black",
            }}
          >
            <MdInsertChartOutlined size={18} />
          </div>
        </NavLink>
      </div>
      <div className="cart-icon">
        <div>
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
