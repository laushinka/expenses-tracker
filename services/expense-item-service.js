const fs = require('fs');
const ExpenseItemModel = require('../models/expense-item-model');

async const add = (expenseItem) => {
    return ExpenseItemModel.create(expenseItem);
};

async const remove = (id) => {
    return ExpenseItemModel.remove({ id });
};

async const findBy = (id) => {
    return ExpenseItemModel.findOne({ id });
};

module.exports = {
    add,
    remove,
    findBy
}