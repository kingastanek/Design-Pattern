/* The Proxy Pattern provides a surrogate or placeholder object 
for another object and controls access to this other object.*/

// API
function DataAPI() {
  this.getValue = function(data) {
    console.log("Calling API...");
    switch (data) {
      case 'data1':
        return 1;
      case 'data2':
        return 2;
      case 'data3':
        return 3;
    }
  }
}

const api = new DataAPI();
// too many request to API
// console.log(api.getValue('data1'));
// console.log(api.getValue('data2'));
// console.log(api.getValue('data3'));
// console.log(api.getValue('data1'));
// console.log(api.getValue('data2'));
// console.log(api.getValue('data3'));

function DataProxy() {
  this.api = new DataAPI();
  this.cache = {};
  this.getValue = function(data) {
    if (this.cache[data] == null ) return this.cache[data] = this.api.getValue(data);
    return this.cache[data];
  }
}

const proxy = new DataProxy();
console.log(proxy.getValue('data1'));
console.log(proxy.getValue('data2'));
console.log(proxy.getValue('data3'));
console.log(proxy.getValue('data1'));
console.log(proxy.getValue('data2'));
console.log(proxy.getValue('data3'));
