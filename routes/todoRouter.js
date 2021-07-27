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
        const completedTodo = {
            id: req.params.id,
            todo: req.body.todo,
            isComplete: req.body.isComplete
        }
        res.end(`Will change the status of a to-do with the id ${req.params.id}`)
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
            todo: req.body.todo,
            date: new Date(),
            isComplete: false
        }

        if (!todo.todo) {
            res.statusCode = 400
            res.end(`You need to add to-do text to create a new to-do`);
            return;
        }
        res.end(`Will create a new to-do ${JSON.stringify(todo)}`)
    })
    .put((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    })
    .delete((req, res) => {
        res.statusCode = 405;
        res.end("Method not allowed");
    });

module.exports = todoRouter;