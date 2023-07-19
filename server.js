const express = require("express");
// library to load the .env file to process.env
const dotEnv = require("dotenv").config();
// An instance of Express
const app = express();

// dotEnv library loads the environment variables from .env file 
const port = process.env.PORT || 5000;

// app.use is used for setting the middleware.
// here using this overloaded method: for '/api/contacts' path, use this router exported by "./routes/contactRoutes"
app.use('/api/contacts', require("./routes/contactRoutes"));

// app.listen is used for creating the server
// here using this implementation to listen to port (from .env or 5000)
// and a callback to perform any initial action
app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})