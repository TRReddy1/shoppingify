import Parse from 'parse/node.js';
import express from 'express';
const router = express.Router();
import data from './data.js';

Parse.initialize('myAppId');
Parse.serverURL = 'http://localhost:1337/parse';

const products = Parse.Object.extend('products');
// console.log(products);
// data.map(async each => {
//   const product = new products();
//   await product.save(each);
//   // return product;
// });

//mine
// const parseData = data.map(each => {
//   const product = new products();
//   product.set({ ...each });
//   return product;
// });
// Parse.Object.saveAll(parseData)d
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // q.limit(1000);
// q.find().then(res => console.log(res.length));

// get all products
router.get('/', async (req, res) => {
  try {
    const q = new Parse.Query(products);
    const data = await q.find();
    // console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
});

router.get('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const q = new Parse.Query(products);
    q.equalTo('objectId', productId);
    const product = await q.first();
    res.send(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
});

export default router;
