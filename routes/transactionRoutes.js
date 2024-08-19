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
  const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    try {
        const totalRecords = await Income.countDocuments();
        const totalPages = Math.ceil(totalRecords / limit);
        const records = await Income.find().skip(skip).limit(limit);

        res.json({ records, totalPages });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.put('/income/:id', async (req, res) => {
  const { id } = req.params;
  const { amount, date, category } = req.body;
  const income = await Income.findByIdAndUpdate(id, { amount, date, category }, { new: true });
  res.send(income);
});

router.delete('/income/:id', async (req, res) => {
  const { id } = req.params;
  await Income.findByIdAndDelete(id);
  res.status(204).send();
  console.log('Income deleted successfully');
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