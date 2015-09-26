import calculateGross from './lib/calculateGross';

function createPerson(salary) {
    return {
        salary: salary,
        gross: calculateGross(salary)
    }
};

let jess = createPerson(64000),
    ian = createPerson(60000);

console.log('Ian: ', ian.gross);
console.log('Jess: ', jess.gross);
console.log('Total: ', jess.gross + ian.gross);

//var originalArray = [
//    [1,2,3,4,5],
//    ['one','two','three','four','five'],
//    [{another: 'for good measure'}]
//];
