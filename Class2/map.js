const transaction = [1000, 2000, 3000, 4000, 3243, -342, -4324];
const inrToDollar = 80;

// const coversionToDollars = () => values = transaction.map((amount =>  amount/inrToDollar));

// const positiveTrans = () => values = transaction.map(amount => (amount > 0 ? amount/inrToDollar : undefined));
        

// console.log(positiveTrans());
// console.log(coversionToDollars());

const totalTransactionValue = (tnxs) => {
   return tnxs.reduce((acc, amount,i) => {
     acc+=amount;
     return acc;
   }, 0);
}

console.log(totalTransactionValue(transaction));