let s1 = "bc";
let s2 = "ad";
let flag = function(s1, s2) {
    let length = s1.length;
    for (let i = 0; i <= s2.length - length; i++) {
        let check = '';
        for (let c = 0; c < length; c++) {
            check += s2[i + c];
        }
        if (isAnagram(check, s1)) {
            return true;
        }
    }
    return false;
};

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    const charCount = {};
    for (let char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of s2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }
    return true;
}
document.write(flag(s1,s2));