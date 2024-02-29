import axios from "axios";

const BASEURL = "http://localhost:1337/";
const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    "X-Parse-Application-Id": "myAppId",
  },
});

export const fetchProducts = async () => {
  try {
    const data = await api.get("products");
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (name, cate, note = "", image) => {
  try {
    const res = await axios.post(
      "http://localhost:1337/parse/classes/products",
      {
        product_name: name,
        category: cate,
        description: note,
        image_url: image,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": "myAppId",
        },
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProduct = async (productId) => {
  try {
    const product = await api.get(`products/${productId}`);
    return product.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:1337/parse/classes/products/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": "myAppId",
        },
      }
    );
    // console.log(res);
    return res.status;
  } catch (err) {
    console.log(err);
  }
};

export const addList = async (name, state, items) => {
  try {
    const res = await axios.post(
      "http://localhost:1337/parse/classes/lists",
      {
        name,
        state,
        items,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": "myAppId",
        },
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(err);
  }
};

export const getLists = async () => {
  try {
    const res = await axios.get("http://localhost:1337/parse/classes/lists", {
      headers: {
        "Content-Type": "application/json",
        "X-Parse-Application-Id": "myAppId",
      },
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getList = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:1337/parse/classes/lists/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": "myAppId",
        },
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
// addProduct("hello", "this is test product", "test");
