const express = require("express");
const cors = require("cors");
const axios = require('axios');
require('dotenv').config();


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", async function(req, res) {
  try {
    const response = await axios.get( `${process.env.HOSTNAME}/everything?q=${req.query.q}&apiKey=${process.env.APIKEY}`);
    res.send({data:response.data});
} catch (err) {
    console.error(err);
}
  
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});