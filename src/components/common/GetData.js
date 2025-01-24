import React from 'react';

const GetData = ({ jsonData, toggle }) => {

  const today = new Date('2025-05-31 00:00:00');
  const DaysAgo = new Date(today);
  DaysAgo.setDate(today.getDate()-(toggle-1));
  // This is the variable for DaysAgo (you can pass it as a prop if needed)


  const dateAmounts = {};

  // Iterate through the data and process each entry
  jsonData.forEach(entry => {
    const timestamp = entry.timestamp;
    const amount = parseFloat(entry.amount);
    const entryDate = new Date(timestamp);
    const dateString = entryDate.toISOString().split('T')[0]; // 'YYYY-MM-DD' format

    if (entryDate > DaysAgo) {
      if (!dateAmounts[dateString]) {
        dateAmounts[dateString] = [];
      }
      dateAmounts[dateString].push(amount);
    }
  });

  // Calculate averages per date
  const dateAverages = [];
  for (const date in dateAmounts) {
    const amounts = dateAmounts[date];
    const income = amounts.filter(item => item >= 0);
    const expense = amounts.filter(item => item < 0);

    const income_avg = income.reduce((sum, value) => sum + value, 0) / amounts.length;
    const expense_avg = expense.reduce((sum, value) => sum + value, 0) / amounts.length;

    dateAverages.push({
      date: date,
      income: Number(income_avg.toFixed(2)),
      expense: Number(-expense_avg.toFixed(2)),
    });
  }

  dateAverages.sort((a, b) => (a.date > b.date ? 1 : -1));

  // Return only the dateAverages array
  return dateAverages;
};

export default GetData;