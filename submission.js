const findSum = function(array) {
 let sum = 0;
    array.forEach(function (num) {
        sum += num;
};

const findFrequency = function(array) {
  let obj = {};
    let most = array[0];
    let least = array[0];
    for (let i = 0; i < array.length; i++) {
        let letter = array[i];

        if (obj[letter]) {
            obj[letter]++
        } else {
            obj[letter] = 1;
        }
        if (obj[array[i]] > obj[most]) {
            most = array[i];
        }
        if (obj[array[i]] < obj[least]) {
            least = array[i];
        }
    }
    return { most: most, least: least };
};

const isPalindrome = function(str) {
  str = str.toLowerCase();
    const reversedStr = str.split("").reverse().join("")
    return str === reversedStr;
};

const largestPair = function(array) {
   var products = [];
    for (var i = 0; i < array.length; i++) {

        var currentNum = array[i];
        var nextNum = array[i + 1];
        var product = currentNum * nextNum;
        if (product) {
            products.push(product);
        }
        var largestPair = Math.max(...products)
    }
    return largestPair;
};

const removeParenth = function(str) {
  return str.replace(/\([^]*\)/g, '');
};

const scoreScrabble = function(str) {
  const letterPoints = {
        a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
    }
    const letterScore = {
        1: [], 2: [], 3: [], 4: [], 5: [], 8: [], 10: []
    }

    let scoreSum = 0;

    for (let i = 0; i < str.length; i++) {
        let letters = str[i];
        let points = letterPoints[letters] || 0;
        scoreSum += points;
        letterScore[points].push(letters);
    }
    return scoreSum;
};
