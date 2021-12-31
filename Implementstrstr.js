/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle === haystack) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }
    return -1;
};


/*

- If the needle is empty we will retrun 0
- If the needle is equal to the haystack then there is no point to search the haystack, therefore we will return 0
- We then loop over the haystack until haystack.length - needle.length because that is the last index of where a needle can be
- Finally if we did not find any match we will return -1

*/