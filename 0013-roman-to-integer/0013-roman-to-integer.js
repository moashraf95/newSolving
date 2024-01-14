var romanToInt = function(str) {

    const romanMap = {
        I : 1 ,
        V: 5 ,
        X : 10 ,
        L : 50 ,
        C : 100 ,
        D: 500 ,
        M: 1000
    }

    const romanSymobolsArr = [...str]; 
    let total = 0;
    
    for(let i = 0 ; i < romanSymobolsArr.length  ; i++){
        const currentValue = romanMap[romanSymobolsArr[i]] ;
        const nextValue = romanMap[romanSymobolsArr[i+1]] || undefined;
        if(!nextValue || currentValue >= nextValue ){
            total += currentValue
        }else {
            total -= currentValue
        }
    }

    return total;

    
};