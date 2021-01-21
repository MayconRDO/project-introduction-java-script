// // switch

// let expression = 'a';

// switch (expression) {
//     case 'a':
//         //codigo
//         break
//     case 'b':
//     //codigo
//     default:
//         //codigo
//         break
// }

// throw

// try .. catch

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário");
    }
    console.log('Depois do erro');
}

try {
    sayMyName();
} catch (e) {
    console.log(e);
}