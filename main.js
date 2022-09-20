const prompt = require('prompt-sync')({sigint: true});


console.log('Do you want to combine or deconstruct colors?');

let whatTodo = (prompt('Enter combine/deconstruct. ')).toLowerCase();

if (whatTodo === 'combine') {
    let colorOne = (prompt('Choose a primary color, red, blue, or yellow. ')).toLowerCase(); 
    let colorTwo = (prompt("Now Choose an alternate primary color.  ")).toLowerCase();
        if (colorOne === 'red' && colorTwo === 'blue'){
            console.log('Your color is Purple! ');
        } else if (colorOne === 'blue' && colorTwo === 'red'){
            console.log('Your color is Purple! ');
        } else if (colorOne === 'red' && colorTwo === 'yellow'){
            console.log('Your color is Orange!');
        } else if (colorOne === 'yellow' && colorTwo === 'red'){
            console.log('Your color is Orange! ');
        } else if (colorOne === 'blue' && colorTwo === 'yellow'){
            console.log('Your color is Green! ');
        } else if (colorOne === 'yellow' && colorTwo === 'blue'){
            console.log('Your color is Green! ')
        } else{
            console.log('ERROR')
        }
 }   
 if (whatTodo === 'deconstruct'){
    let whatColor = prompt('What color are we deconstructing? Secondary colors only. ').toLowerCase();
    if (whatColor === 'purple'){
        let colorOne = 'red';
        let colorTwo = 'blue';
        console.log (`Your color has been deconstructed into ${colorOne} and ${colorTwo}.`)
    } else if (whatColor === 'orange'){
        let colorOne = 'red';
        let colorTwo = 'yellow';
        console.log (`Your color has been deconstructed into ${colorOne} and ${colorTwo}.`)
    }else if (whatColor === 'green'){
        let colorOne = 'blue';
        let colorTwo = 'yellow';
        console.log (`Your color has been deconstructed into ${colorOne} and ${colorTwo}.`)
    }else{
        console.log('ERROR')
        
    }
 }
 
// let colors = prompt('Enter one secondary color, or two primary colors. ').toLowerCase()

// if (colors).includes('purple') = true
//     let colorOne = 'red'
//     let colorTwo = 'blue'
//     console.log (`This color is created by adding ${colorOne} and ${colorTwo}`)
