//basic JS function
function add(n1,n2){
    return n1 + n2;
}


const number1 = '2.4';
const number2 = 2.6;

const result = add(number1,number2);
console.log(result);

//defining the data type explicitly
function add1(n3: number, n4: number){
    return n3 + n4;
}


const number3 = 2.9;
const number4 = 2.1;

const result1 = add1(number3,number4);
console.log(result1);

//using all data types such as boolean, string and number
function add3(n1: number, n2:number, showResult: boolean, phrase: string){
    const sum = n1 + n2;

    if(showResult){
        console.log(phrase + sum);
    }
    else{
      
      }  return sum;
    }

    const num1 = 5;
    const num2 = 10;
    const printResult = true;
    const resultPhrase = 'Result is: ';


    add3(num1,num2,printResult,resultPhrase);
