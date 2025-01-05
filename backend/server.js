const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
  

// Routes



// Start server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 404 error handling middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});
