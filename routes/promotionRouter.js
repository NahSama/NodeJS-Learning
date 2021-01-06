const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.header('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will get all the promotions to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the promotion with the promotion name: ${req.body.name} and the promotion description :${req.body.description}`);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation is not supported for /promotions`);
    })
    .delete((req, res, next) => {
        res.end(`Will delete all the promotions for you!`);
    });

promotionRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.header('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send the detail of the promotion: ${req.params.promotionId} to you!`);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end(`POST operation is not supported for /promotions`);
    })
    .put((req, res, next) => {
        res.end(`Will update the detail of the promotion: ${req.params.promotionId} with the promotion name: ${req.body.name} and the promotion description: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Will delete the promotion: ${req.params.promotionId} for you!`);
    });

module.exports = promotionRouter;