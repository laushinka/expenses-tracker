const fs = require('fs');
const ExpenseItemModel = require('../models/expense-item-model');

async function findAll() {
    (ExpenseItemModel.find());
    return ExpenseItemModel.find();
};

async function add(expenseItem) {
    return ExpenseItemModel.create(expenseItem);
};

async function remove (id) {
    return ExpenseItemModel.remove({ id });
};

async function findBy(id) {
    return ExpenseItemModel.findOne({ id });
};

module.exports = {
    findAll,
    add,
    remove,
    findBy
}