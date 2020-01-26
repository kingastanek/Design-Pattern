/* The Visitor Pattern defines a new operation or a set of operations on an object
or a set of objects without changing the objects themselves.
The new logic is implemented in a separate object defined as visitor. 
*/

function Employee(name, salary) {
  this.name = name,
  this.salary = salary
}

Employee.prototype = {
  getSalary: function() {
    return this.salary;
  },
  setSalary: function(sal){
    this.salary = sal;
  },
  accept: function(visitorFunction) {
    visitorFunction(this);
  }
}

const kindzi = new Employee('Kinga', 10000);
console.log(kindzi.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

kindzi.accept(ExtraSalary)
console.log(kindzi.getSalary());