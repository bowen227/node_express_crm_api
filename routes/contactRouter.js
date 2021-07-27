const express = require("express");
const contactRouter = express.Router();

contactRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the contacts to you");
    })
    .post((req, res) => {
        const contact = {
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            phone: req.body.phone
        }
        res.end(`Will create a new contact ${JSON.stringify(contact)}`);
    })
    .put((req, res) => {
        const contact = {
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            phone: req.body.phone
        }
        res.end(`Will update a contact ${JSON.stringify(contact)}`);
    })
    .delete((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    });

contactRouter
    .route("/:id")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end(`Will send the contact with the id ${req.params.id}`)
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.end(`Method not allowed`);
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.end(`Method not allowed`);
    })
    .delete((req, res) => {
        res.end(`Will remove contact with the id: ${req.params.id}`);
    });

module.exports = contactRouter;