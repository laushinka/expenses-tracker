const express = require('express')
const router = express.Router()
const ExpenseItemService = require('../services/expense-item-service');

router.get('/', async(req, res, next) => {
    res.send(await ExpenseItemService.findAll());
});

router.get('/all', async(req, res, next) => {
    const expenses = await ExpenseItemService.findAll();
    res.render('expenses-list', {expenses});
});

router.post('/', async(req, res, next) => {
    console.log("request > ", req.body);    
    const item = await ExpenseItemService.add(req.body);
    console.log("item > ", item);
    res.send(item);
});

module.exports = router;