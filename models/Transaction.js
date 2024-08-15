const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true }
});

const expenseSchema = new Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true }
});

const savingsGoalSchema = new Schema({
  targetAmount: { type: Number, required: true },
  deadline: { type: Date, required: true },
  currentAmount: { type: Number, default: 0 }
});

const Income = mongoose.model('Income', incomeSchema);
const Expense = mongoose.model('Expense', expenseSchema);
const SavingsGoal = mongoose.model('SavingsGoal', savingsGoalSchema);

module.exports = { Income, Expense, SavingsGoal };