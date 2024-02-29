import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Item from "./Item";
import { fetchProducts } from "../api";
import { useEffect, useState } from "react";
import { fetchedProducts } from "../features/productSlice";
import Rightbar from "./Rightbar";
import AddItems from "./AddItems";
import History from "./History";
import { Route, Routes } from "react-router-dom";
import ListDetails from "./ListDetails";
import Charts from "./Charts";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [categoryWised, setCategoryWised] = useState({});
  const [showAddItem, setShowAddItem] = useState(false);
  const [keys, setKeys] = useState([]);
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchProducts().then((res) => dispatch(fetchedProducts(res)));
  }, [dispatch]);

  useEffect(() => {
    if (products.allProducts.length > 0) {
      setCategoryWised(
        products.allProducts.reduce((accu, curr) => {
          if (!accu.hasOwnProperty(curr.category)) {
            accu[curr.category] = [];
          }
          accu[curr.category].push({
            id: curr.objectId,
            name: curr.product_name,
            count: 1,
            category: curr.category,
          });
          return accu;
        }, {})
      );
    }
  }, [products]);
  // console.log(searchText);

  useEffect(() => {
    if (categoryWised) {
      const keyy = Object.keys(categoryWised);
      setKeys(keyy);
    }
  }, [categoryWised]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <Header searchText={searchText} setSearchText={setSearchText} />
              {products.allProducts.length !== 0 && (
                <div className="products-list">
                  {keys.map((key, idx) => {
                    if (
                      searchText == "" ||
                      categoryWised[key].some((item) => {
                        return item.name
                          .toLowerCase()
                          .includes(searchText.toLowerCase());
                      }) ||
                      key.toLowerCase().includes(searchText.toLowerCase())
                    )
                      return (
                        <div key={idx} className="sublist">
                          <div className="categoryText">{key}</div>
                          <div className="itemsList">
                            {categoryWised[key]?.map((e, index) => {
                              if (
                                searchText == "" ||
                                e.name
                                  .toLowerCase()
                                  .includes(searchText.toLowerCase()) ||
                                key
                                  .toLowerCase()
                                  .includes(searchText.toLowerCase())
                              )
                                return (
                                  <Item
                                    key={index}
                                    product={e}
                                    setShowDetails={setShowDetails}
                                  />
                                );
                            })}
                          </div>
                        </div>
                      );
                  })}
                </div>
              )}
            </div>
          }
        />
        <Route path="/history" element={<History />}></Route>
        <Route path="/history/:listId" element={<ListDetails />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
      {!showAddItem && (
        <Rightbar
          setShowAddItem={setShowAddItem}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
      {showAddItem && <AddItems keys={keys} setShowAddItem={setShowAddItem} />}
    </div>
  );
};

export default Home;
