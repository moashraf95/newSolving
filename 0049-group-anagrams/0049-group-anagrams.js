var groupAnagrams = function (strs) {

    let map1 = new Map();
    let map2 = new Map();
    let tracker = 0
    for (let i = 0 ; i< strs.length ; i++){
        const sortedWord = [...strs[i]].sort().join('') ;

        if(!map1.has(sortedWord)){
            map1.set(sortedWord,[strs[i]]);
            map2.set(tracker,sortedWord);
            tracker ++ ;
        }else{
            const pastValue = map1.get(sortedWord);
            const newValue = [...pastValue , strs[i]];
            map1.set(sortedWord,newValue);
        }
    }

    const result = [];

    for (let i = 0; i < map1.size; i++) {
        result.push(map1.get(map2.get(i)))
    }

    return result;
};
