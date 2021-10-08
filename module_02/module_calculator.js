let calculatorModule = (function() {
    const _calcHistory = new Map();
    const _calcCache = [];

    const checkOperation = () => { console.log(_calcCache.join(' '))};    
    const checkHistory = () => { console.log(_calcHistory)};    
    const enter = input => {_calcCache.push(input)};
    const clearOperation = () => {_calcCache.length = 0 };
    const clearHistory = () => {_calcHistory.clear();
                               return console.log('History Cleared') };
    const reset = () =>  {clearOperation(); clearHistory()};
    const undo = () => { _calcCache.pop(); return};

    const _operationHandler = (symbol, a, b) => {
            switch(symbol){
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '/':
                    return a / b;
                case '*':
                    return a * b;
                case '%':
                    return a % b;
                case '**':
                    return a ** b; 
                default:
                    console.log(`Operation "${symbol}" not recognized.`)
            }
    };    

    const equals = () => {
            let result = _operationHandler(_calcCache[1], _calcCache[0], _calcCache[2]);            
            
            for(let iten = 3; iten < _calcCache.length; iten++){
                if(typeof _calcCache[iten] == 'string'){
                    result = _operationHandler(_calcCache[iten], result, _calcCache[iten+1])
                }
            }

            _calcHistory.set(_calcCache.join(' '), result)

            clearOperation()            

            return result
    };

    return {
        enter,
        checkHistory,
        checkOperation,
        equals,
        clearOperation,
        clearHistory,
        reset,
        undo,
        
    }

}())