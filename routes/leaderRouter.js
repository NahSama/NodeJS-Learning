const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.header('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will get all the leaders to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the leader with the leader name: ${req.body.name} and the leader description :${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation is not supported for /leaders`);
    })
    .delete((req, res, next) => {
        res.end(`Will delete all the leaders for you!`);
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.header('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send the detail of the leader: ${req.params.leaderId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation is not supported for /leaders`);
    })
    .put((req, res, next) => {
        res.end(`Will update the detail of the leader: ${req.params.leaderId} with the leader name: ${req.body.name} and the leader description: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Will delete the leader: ${req.params.leaderId} for you!`);
    });

module.exports = leaderRouter;