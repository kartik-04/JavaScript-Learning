const transactions = [
  { customerId: 1, amount: 100, date: "2024-03-01" },
  { customerId: 2, amount: 150, date: "2024-03-01" },
  { customerId: 1, amount: 200, date: "2024-03-02" },
  { customerId: 3, amount: 50, date: "2024-03-02" },
  { customerId: 2, amount: 120, date: "2024-03-03" },
];

// Question1: totalTransactionsCount
function totalTransactionsCount() {
  return transactions.length;
}
// Question2: totalTransactionsAmount
function totalTransactionsAmount() {
  return transactions.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
}
// Question3: transactionsByDate
function transactionsByDate(date) {
  return transactions.filter((item) => {
    return item.date === date;
  });
}
// Question4: transactionsByCustomerId
function transactionsByCustomerId(customerId) {
  return transactions.find((item) => {
    return item.customerId === customerId;
  });
}
// Question5: groupTransationByDate
function groupTransationByDate() {
  return transactions.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [item];
    } else {
      acc[item.date].push(item);
    }
    return acc;
  }, {});
}

console.log(totalTransactionsCount());
console.log(totalTransactionsAmount());
console.log(transactionsByDate("2024-03-02"));
console.log(transactionsByCustomerId(1));
console.log(groupTransationByDate());
