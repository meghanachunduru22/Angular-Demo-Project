class AddTwo{
    private num1 : number;
    private num2 : number;
    constructor(a,b){
        this.num1 = a;
        this.num2 = b;
    }
    public sum() : number{
        return this.num1 + this.num2;
    }


}
let A:AddTwo = new AddTwo(1,4);
console.log(A.sum());