const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 8014;

// Use the cors middleware with the allowed origin
app.use(cors({
  origin: '*',
}));

//add a / route to serve the hello world message
app.get('/', (req, res) => {
  // const folder = req.params.folder;
  // console.log(folder);
  res.send('Hello World!');
});

//add a / route to serve the hello world message
app.get('/api/:folder', (req, res) => {
  const folder = req.params.folder;
  const filePath = path.join(__dirname, '/components/',folder,`data.jsonc` );
  const data = fs.readFileSync(filePath, 'utf8')
  const cleanedJSONString = data.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
  const cleanedJSONObject = JSON.parse(cleanedJSONString)
  res.status(200).send(cleanedJSONObject);
});

// Define a route to serve JSON files based on the API endpoint
app.get('/api/:folder/:file', (req, res) => {

  const folder = req.params.folder;
  const file = req.params.file;
  
  const filePath = path.join(__dirname, '/components/',folder,`${file}.jsonc` );
  let data = fs.readFileSync(filePath, 'utf8')
  // data = JSON.parse(data);
  const cleanedJSONString = data.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
  const cleanedJSONObject = JSON.parse(cleanedJSONString)
  // console.log(cleanedJSONObject);
  //res send with 200 status code
  res.status(200).send(cleanedJSONObject);


  // console.log(data);

  // // Check if the file exists
  // if (fs.existsSync(filePath)) {
  //   // Read the JSON file and send it as a response
  //   const jsonData = fs.readFileSync(filePath, 'utf8');
  //   const data = JSON.parse(jsonData);
  //   res.json(data);
  // } else {
  //   res.status(404).json({ error: 'File not found' });
  // }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
