function capitalize(string){
   return string[0].toUpperCase()+string.slice(1);
}

function reverseString(string){
    let charArr = string.split("");
    let reversed = "";
    for(let x = charArr.length-1;x >= 0; x-- ){
        reversed += charArr[x];
    }
    return reversed;
}

let calculator = {
    add: (x,y) => {
        return x+y;
    },

    divide: (x,y) => {
        return parseFloat((x/y).toFixed(1));
    },

    substract: (x,y) => {
        return x-y;
    },

    multiply: (x,y) => {
        return x*y;
    }
}

function shiftChar(char,shift,alphArr){
    let idx = alphArr.indexOf(char)+shift;
    if(idx>25) { idx = idx-26 };
    return idx;
}

function isUpperCase(char){
    return char == char.toUpperCase()
}

function isAlphabet(char,alphArr){
    return alphArr.indexOf(char.toLowerCase());
}

function caesarCipher(word,shift){
    let alphabetArr = [...Array(26)].map((_,i) => String.fromCharCode(i + 97));
    let wordArr = word.split("");
    let encrypted = "";

    wordArr.forEach(char => {
        if(isAlphabet(char,alphabetArr) == -1){
            encrypted += char;
        }else{
            if(isUpperCase(char)){
                encrypted += alphabetArr[shiftChar(char.toLowerCase(),shift,alphabetArr)].toUpperCase()
            }else{
                encrypted += alphabetArr[shiftChar(char,shift,alphabetArr)]
            }
        }
    });

    return encrypted;
}

function getAverage(arr){
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    })
    return sum/arr.length;
}

function analyzeArray(arr){
    let obj = {
        average: getAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

    return obj
}

export {capitalize,reverseString, calculator, caesarCipher, analyzeArray}