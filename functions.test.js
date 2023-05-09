const myFunctions = require('./functions');
const stringLength = myFunctions.stringLength;
const reverseString = myFunctions.reverseString;
const captlizeString = myFunctions.captlizeString;
const calculator = myFunctions.calculator;

describe('string tests', () => {
    test('it should return string length', () => {
        expect(stringLength("a")).toBe(1);
    });

    test('it should reverse the given string', () => {
        expect(reverseString('ahmed')).toBe('demha')
    })

    test('it should captlize the given string', () => {
        expect(captlizeString('ahmed')).toBe('Ahmed')
    })
})

describe('claculatot tests', () => {
    test('adding test', () => {
        expect(calculator.add(5, 5)).toBe(10);
    });
    test('subtracting test', () => {
        expect(calculator.subtract(5, 5)).toBe(0);
    });
    test('Multiplyong test', () => {
        expect(calculator.mutiply(5, 5)).toBe(25);
    });
    test('Deviding test', () => {
        expect(calculator.devide(5, 5)).toBe(1);
    })
})