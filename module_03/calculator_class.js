class CalculatorBasics {
    constructor() {
        this._calcHistory =   new Map();
        this._calcCache = [];
        this.showLog = false;
    };

    checkOperation(){ 
        console.log(this._calcCache.join(' '))
    };
    get history(){
        console.log(this._calcHistory)
    };
    enter(input){
        this._calcCache = [...this._calcCache, input];
    };

    clearOperation(showLog){
        this._calcCache = [];
        if(showLog){
            console.log('Operation Cleared')
        }
    };
    clearHistory(){
        this._calcHistory.clear();
        console.log('History Cleared')
    };
    reset(){
        this.clearOperation();
        this.clearHistory()
    };
    undo(){
        this._calcCache.pop(); 
        return
    };

    // #sum = (array) =>  array.reduce((acc, current) => acc + current, 0);
    // #subtract = (array) =>  array.reduce((acc, current) => acc - current, 0);
    // #multiply = (array) =>  array.reduce((acc, current) => acc * current, 1);
    // #divide = (array) =>  array.reduce((acc, current) => acc / current);

    // operations = {'sum':this.#sum, 'subtract':this.#subtract, 'multiply':this. #multiply, 'divide':this.#divide};
    // operators = {'sum':'+', 'subtract':'-', 'multiply':'*', 'divide':'/'};

    equals(operation, operator){
        let result = operation(this._calcCache);
        this._calcHistory.set(this._calcCache.join(operator), result);
        this.clearOperation(showLog = false);
        return result
    }

};

class CalculatorSpecific extends CalculatorBasics{
    constructor(operation){
        super();
        this.operation = operation;
    }

    #sum = (array) =>  array.reduce((acc, current) => acc + current, 0);
    #subtract = (array) =>  array.reduce((acc, current) => acc - current, 0);
    #multiply = (array) =>  array.reduce((acc, current) => acc * current, 1);
    #divide = (array) =>  array.reduce((acc, current) => acc / current);

    #operations = {'sum':this.#sum, 'subtract':this.#subtract, 'multiply':this. #multiply, 'divide':this.#divide};
    #operators = {'sum':'+', 'subtract':'-', 'multiply':'*', 'divide':'/'};

    equals(){
        super.equals(this.#operations[this.operation], this.#operators[this.operation]);
    }

};


let sumCalculator = new CalculatorSpecific('sum');
let multCalculator = new CalculatorSpecific('multiply');
let divCalculator = new CalculatorSpecific('divide');
let subtCalculator = new CalculatorSpecific('subtract');