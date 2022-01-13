
function Calculator(a, b) {

   this.a = a;
   this.b = b;

   this.sum = function () {
      return this.a + this.b;
   };

   this.sub = function () {
      return this.a - this.b;
   };

   this.mult = function () {
      return this.a * this.b;
   };

   this.div = function () {
      if (this.b === 0) {
         return 'Fehler'
      }
      return this.a / this.b;
   };
}

let calculator = new Calculator(5, 2);
console.log(calculator.sum());
console.log(calculator.div());