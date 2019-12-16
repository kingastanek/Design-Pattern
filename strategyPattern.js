/* The Strategy Pattern encapsulates alternative algorithms (or strategies) for a particular task.
It allows a method to be swapped out at runtime by any other method (strategy) without the client
realizing it. Essentially, Strategy is a group of algorithms that are interchangeable. */

function Company1() {
  this.calculate = (package) => {
    //company1 calculations...
    return 1.22;
  }
}

function Company2() {
  this.calculate = (package) => {
    //company2 calculations...
    return 2.56;
  }
}

function Company3() {
  this.calculate = (package) => {
    //company3 calculations...
    return 2.88;
  }
}

const company1 = new Company1();
const company2 = new Company2();
const company3 = new Company3();

const package = { weight: 0.5 };

//want we can do
company1.calculate(package);
company2.calculate(package);
company3.calculate(package);

//instead, we are using Strategy Patter
function Shipping() {
  this.company = '',
  this.setStrategy = (company) => {
    this.company = company;
  }
  this.calculate = (package) => {
    return this.company.calculate(package);
  }
}

const shipping = new Shipping;

shipping.setStrategy(company1);
console.log(`Company1: ${shipping.calculate(package)}`);

shipping.setStrategy(company2);
console.log(`Company2: ${shipping.calculate(package)}`);

shipping.setStrategy(company3);
console.log(`Company3: ${shipping.calculate(package)}`);
