function Developer(name) {
  this.name = name,
  this.type = "Developer"
}

function Tester(name) {
  this.name = name,
  this.type = "Tester"
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch(type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  }
}

function indroduceYourself() {
  console.log(`Hi, I'm ${this.name} and I'm a ${this.type}`)
}

const employeeFactory = new EmployeeFactory;
const employees = [];

employees.push(employeeFactory.create("John", 1));
employees.push(employeeFactory.create("Greg", 2));

employees.forEach(employee => {
  indroduceYourself.call(employee);
})