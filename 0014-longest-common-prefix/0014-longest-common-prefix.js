/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let longestprefix = strs[0];


    for (let i = 1; i < strs.length; i++) {

        let currentPrefix = "";

        for (let j = 0; j < longestprefix.length || j < strs[i].length; j++) {

            if (longestprefix[j] == strs[i][j]) {

                currentPrefix = currentPrefix + strs[i][j]


            } else {
                if (currentPrefix.length < longestprefix.length) {

                    longestprefix = currentPrefix;


                }
                break;
            }


        }
    }


    return longestprefix;

};