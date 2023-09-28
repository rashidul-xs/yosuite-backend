const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 9000;

// Use the cors middleware with the allowed origin
app.use(cors({
  origin: '*',
}));

//add a / route to serve the hello world message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a route to serve JSON files based on the API endpoint
app.get('/api/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  
  const filePath = path.join(__dirname, 'dev-schema-planning', `${fileName}.json`);
  console.log(filePath);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Read the JSON file and send it as a response
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    res.json(data);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
