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

*/