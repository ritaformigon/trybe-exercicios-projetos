const base = 5;
const height = 8;
const area = base * height;
const perimeter = (2 * base) + (2 * height);

console.log(area);
console.log(perimeter);

//----------------------------------------------------------------------

let nota = 85;

if (nota >= 80) {
 console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
}
else if (nota < 80 && nota >= 60) {
 console.log('Você está na nossa lista de espera.');
}
else {
 console.log('Infelizmente, você reprovou.');
}

//----------------------------------------------------------------------

let currentHour = 2;
let message = '';

if (currentHour >= 22) {
 message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
 message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 && currentHour < 18) {
 message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour <14) {
 message = 'Hora do almoço!!!';
}
else if (currentHour >= 4 && currentHour < 11) {
 message = 'Hmmm, cheiro de café recém-passado'
}
else {
 message = 'Fora do horário pedido no exercício.'
}

console.log(message);

//----------------------------------------------------------------------

let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
 console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else {
 console.log('FINALMENTE, descanso merecido! UwU!');
}

//----------------------------------------------------------------------

let resultado;

switch (resultado) {

 case 'aprovada':
  console.log('Parabéns, você está no grupo de pessoas aprovadas!');
  break;

 case 'lista':
  console.log('Você está na nossa lista de espera.');
  break;

 case 'reprovada':
  console.log('Infelizmente, você reprovou.');
  break;

 default:
  console.log('Informação incorreta.');
}

//----------------------------------------------------------------------

//Exercício 1

let a = 10;
let b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));
console.log('Exponenciação: ' + (a ** b));

//----------------------------------------------------------------------

//Exercício 2

let num1 = 10;
let num2 = 11;

if (num1 > num2) {
 console.log('num1 é maior que num2.');
}
else {
 console.log('num2 é maior que num1');
}

//----------------------------------------------------------------------

//Exercício 3

let a = 10;
let b = 15;
let c = 20;

if (a > b && a > c) {
 console.log('O maior número é: ' + a);
}
else if (b > c && b > a) {
 console.log('O maior número é: ' + b);
}
else {
 console.log('O maior número é: ' + c);
}

//----------------------------------------------------------------------

//Exercício 4

let number = 0;

if (number > 0) {
 console.log('O número ' + number + ' é positivo.');
}
else if (number < 0) {
 console.log('O número ' + number + ' é negativo.');
}
else {
 console.log('Esse número é zero.');
}

//----------------------------------------------------------------------

//Exercício 5

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}

//----------------------------------------------------------------------

//Exercício 6

let chessPiece = 'Rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};

//----------------------------------------------------------------------

//Exercício 7

let grade = 60;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//----------------------------------------------------------------------

//Exercício 8

let a = 10;
let b = 15;
let c = 20;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
 console.log('true');
}
else {
 console.log('false');
}

//----------------------------------------------------------------------

//Exercícios 9

let a = 5;
let b = 6;
let c = 8;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
 console.log('true');
}
else {
 console.log('false');
}

//----------------------------------------------------------------------

//Exercício 10

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
 let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
}

//----------------------------------------------------------------------

// Exercício 11

let salarioBruto = 3000.00;
let salarioLiquido;
let salarioBase;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
 aliquotaINSS = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
 aliquotaINSS = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
 aliquotaINSS = salarioBruto * 0.11;
}
else {
 aliquotaINSS = 570.88;
}

salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
 aliquotaIR = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
 aliquotaIR = (7.5/100) * salarioBase - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
 aliquotaIR = (15.100) * salarioBase - 354.80;
}

else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
 aliquotaIR = (22,5.100) * salarioBase - 636.13;
}
else {
 aliquotaIR = (27.5/100) * salarioBase - 869.36;
}

salarioLiquido = salarioBase - aliquotaIR;

console.log('O salário líquido é R$ ' + salarioLiquido);





