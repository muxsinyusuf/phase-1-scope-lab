var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
  // Attempting to change a constant will result in an error (TypeError).
  leastFavoriteCustomer = 'Bob';
}
n