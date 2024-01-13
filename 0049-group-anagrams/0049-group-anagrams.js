var groupAnagrams = function (strs) {

    let map1 = new Map();
    map1.set(0, [strs[0]])
    let tracker = 0;

    for (let i = 1; i < strs.length; i++) {

        for (let j = 0; j <= tracker; j++) {
            const comparedValue = map1.get(j);
            const areAnagrams = compareAnagrams(strs[i], comparedValue[0]);

            if (areAnagrams) {
                const newComparedValue = [...comparedValue, strs[i]];
                map1.set(j, newComparedValue);
                 break;
            } else if (j == tracker && !areAnagrams) {
                tracker ++ ;
                map1.set(tracker, [strs[i]]);
                break;
            }
        }

    }

    const result = [];

    for (let i = 0; i < map1.size; i++) {
        result.push(map1.get(i))
    }

    return result;


};


// O(n)
const compareAnagrams = function (s, t) {

    if (s.length != t.length) return false;
    const arr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()]++;
        arr[t[i].charCodeAt() - 'a'.charCodeAt()]--;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) return false;
    }

    return true;
}