const express = require('express')
const router = express.Router()
const ExpenseItemService = require('../services/expense-item-service');

router.get('/', async(req, res, next) => {
    res.send(await ExpenseItemService.findAll;
});

router.post('/', async(req, res, next) => {
    const item = await ExpenseItemService.add(req.body);
    res.send(item);
});

module.exports = router;