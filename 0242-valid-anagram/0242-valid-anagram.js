var isAnagram = function (s, t) {

    const arr = new Array(26).fill(0);

    if (s.length != t.length) {
        return false;
    }

    for (i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()] += 1;
        arr[t[i].charCodeAt() - 'a'.charCodeAt()] -= 1;
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != 0) return false;
    }

    return true;


};
