// Example express application adding the parse-server module to expose Parse
// compatible API routes.

import express from 'express';
import { ParseServer } from 'parse-server';
import path from 'path';
const __dirname = path.resolve();
import http from 'http';
import cors from 'cors';

export const config = {
  databaseURI:
    process.env.DATABASE_URI ||
    process.env.MONGODB_URI ||
    'mongodb+srv://reddyravindrat4512:<password>@cluster0.fx7amgy.mongodb.net/',
  // cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  masterKey: process.env.MASTER_KEY || 'master', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  },
};
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

export const app = express();
app.use(cors());
// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(express.json());

// Serve the Parse API on the /parse URL prefix
if (!process.env.TESTING) {
  const mountPath = process.env.PARSE_MOUNT || '/parse';
  const server = new ParseServer(config);
  await server.start();
  app.use(mountPath, server.app);
}

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

import productRoutes from './routes/productRoutes.js';
app.use('/products', productRoutes);
// import Parse from 'parse/node.js';
// Parse.initialize('myAppId');
// Parse.serverURL = 'http://localhost:1337/parse';
// const products = Parse.Object.extend('products');
// const q = new Parse.Query(products);

// app.get('/products', async (req, res) => {
//   // res.send('hello');
//   try {
//     q.limit(1000);
//     const data = await q.find();
//     res.send(data);
//   } catch (error) {
//     res.send(error);
//   }
// });
// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

if (!process.env.TESTING) {
  const port = process.env.PORT || 1337;
  const httpServer = http.createServer(app);
  httpServer.listen(port, function () {
    console.log('parse-server-example running on port ' + port + '.');
  });
  // This will enable the Live Query real-time server
  await ParseServer.createLiveQueryServer(httpServer);
}
