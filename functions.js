const stringLength = (string) => {
    let count = 0;
    if (string.length >= 1 && string.length <= 10) {
        string = string.split('');
        for (let i = 0; i < string.length; i += 1) {
            count += 1;
        }
        return count;
    } else {
        throw new Error('Your string length does not meet our conditions')
    }
}

const reverseString = (string) => {
    let output = '';
    string = string.split('');
    for (let i = string.length - 1; i >= 0; i -= 1) {
        output += string[i];
    }
    return output;
}

const captlizeString = (string) => {
    string = string.split('')
    for(let i = 0; i < string.length; i += 1) {
       string[0] = string[0].toUpperCase();
    }
    string = string.join('')
return string
}
class calculator {
    static add(x, y) {
        return x + y;
    }

    static subtract(x, y) {
        return x - y;
    }

    static mutiply(x, y) {
        return x * y;
    }

    static devide(x, y) {
        return x / y;
    }
}
module.exports = { stringLength, reverseString, captlizeString, calculator };