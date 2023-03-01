//format numbers as currency string

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(formatter.format(20000));