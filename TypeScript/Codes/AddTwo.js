var AddTwo = /** @class */ (function () {
    function AddTwo(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    AddTwo.prototype.sum = function () {
        return this.num1 + this.num2;
    };
    return AddTwo;
}());
var A = new AddTwo(1, 4);
console.log(A.sum());
