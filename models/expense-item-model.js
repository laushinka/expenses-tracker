const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ExpenseItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        min: 0,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: false
    }
});

ExpenseItemSchema.plugin(AutoIncrement, {inc_field: 'id'});

const ExpenseItemModel = mongoose.model("ExpenseItem", ExpenseItemSchema);

module.exports = ExpenseItemModel;