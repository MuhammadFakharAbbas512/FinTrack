const express = require('express');
const router = express.Router();
const { Income, Expense, SavingsGoal } = require('../models/Transaction');

// Income routes
router.post('/income', async (req, res) => {
  const { amount, date, category } = req.body;
  const income = new Income({ amount, date, category });
  await income.save();
  res.status(201).send(income);
});

router.get('/income', async (req, res) => {
  const incomes = await Income.find();
  res.send(incomes);
});

// Expense routes
router.post('/expense', async (req, res) => {
  const { amount, date, category } = req.body;
  const expense = new Expense({ amount, date, category });
  await expense.save();
  res.status(201).send(expense);
});

router.get('/expense', async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
});

// Savings Goal routes
router.post('/savings-goal', async (req, res) => {
  const { targetAmount, deadline } = req.body;
  const savingsGoal = new SavingsGoal({ targetAmount, deadline });
  await savingsGoal.save();
  res.status(201).send(savingsGoal);
});

router.get('/savings-goal', async (req, res) => {
  const savingsGoals = await SavingsGoal.find();
  res.send(savingsGoals);
});

module.exports = router;