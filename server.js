const express = require("express");
const morgan = require("morgan");
const contactRouter = require("./routes/contactRouter");
const todoRouter = require("./routes/todoRouter");

// DEFINE HOSTNAME AND PORT
const hostname = "localhost";
const port = 3000;

// DEFINE APP EXPRESS(), USE MORGAN AND EXPRESS.JSON()
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/contacts", contactRouter);
app.use("/todos", todoRouter);

// SETUP BASE ROUTE
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server for Exersize API</h1></body></html>");
});

// LISTEN TO SERVER
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});