let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
const cors = require("cors");
// Initialize the app
let app = express();
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  
  app.use(cors());
  app.use(bodyParser.json());

// Import routes
let routes = require("./routes");

const URL = "mongodb+srv://pragnesh30gajera:pragnesh123@cluster0.zesths2.mongodb.net/?retryWrites=true&w=majority";
app.use(express.static("public"));
// let Schema = mongoose.Schema;
const PORT = 5000;

// Connect to MongoDB Cloud
mongoose
  .connect(URL)
  .then(() => console.log("Successfully Connected with DATABASE"))
  .catch((err) =>
    console.error("Error while connecting to DATABASE: Error ==>", err)
  );

var db = mongoose.connection;

// Send message for default URL
app.get("/", (req, res) => res.send("Pragnesh Gajera 's API is running..."));

// Use Api routes in the App
app.use("/", routes);

// Start the server for port 5000
app.listen(PORT, "0.0.0.0", function () {
  console.log(`Server is running on Port: ${PORT}`);
});
