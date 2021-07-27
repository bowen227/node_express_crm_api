const express = require("express");
const todoRouter = express.Router();

todoRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the todos to you");
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    })
    .delete((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    });

todoRouter
    .route("/:id")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end(`Will send you the todo with the id: ${req.params.id}`);
    })
    .post((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    })
    .delete((req, res) => {
        res.end(`Will remove todo with the id: ${req.params.id}`);
    });

todoRouter
    .route("/contact/:contactId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end(`Will send all the to-do's for contact with the id ${req.params.contactId}`)
    })
    .post((req, res) => {
        const todo = {
            contact: req.params.contactId,
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            phone: req.body.phone
        }
        res.end(`Will create a new to-do ${JSON.stringify(todo)}`)
    })
    .put((req, res) => {
        const todo = {
            contact: req.params.contactId,
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            phone: req.body.phone
        }
        res.end(`Will update a new to-do ${JSON.stringify(todo)}`)
    })
    .delete((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    });

module.exports = todoRouter;