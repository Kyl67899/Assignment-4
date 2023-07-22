// PART A

// Calculate BMI and compare each BMI

// BMI = mass / 2*h

// mass in kg hieght in meter

// calculate the stored numbers the user entered BMI

let peterBMI = Math.round(78 / (2*1.69));

let lucasHigherBMI = Math.round(78 / (2*1.95));

let boolean = peterBMI > lucasHigherBMI

console.log(`The BMI of Peter is ${peterBMI}. The BMI of Lucas is ${lucasHigherBMI}. Peter\'s BMI is higher than Lucas\'s BMI that is ${boolean}.`);

// PART B

// Temperature Converter C => F; F => C

let Celsius = prompt("Enter a celsius value :")

let F = prompt("Enter a fahrnheit value :")

// console.log(`You entered celsius: ${Celsius}`)

// C => F

Fah = (9/5 * Celsius) + 32;

// F => C

Cel = Math.round((F - 32) * (5/9));

// C to F

console.log(`From ${Celsius}\xB0C to ${F}\xB0F = ${Fah}\xB0F. From ${F}\xB0F to ${Celsius}\xB0C = ${Cel}\xB0C`);

document.getElementById("CToF").innerHTML = (`From ${Celsius}\xB0C to \xB0F = ${Fah}\xB0F.`);

document.getElementById("FToC").innerHTML = (`From ${F}\xB0F to \xB0C = ${Cel}\xB0C.`);

// PART C

// Calculate BMI and compare each BMI

// BMI = mass / 2*h

// mass in kg hieght in meter

// calculate the stored numbers the user entered BMI

// let peterBMI = 78 / (2*1.69)

// let lucasHigherBMI = 78 / (2*1.95)

// let boolean = peterBMI > lucasHigherBMI

// console.log(`The BMI of Peter is ${peterBMI}. The BMI of Lucas is ${lucasHigherBMI}. Peter\'s BMI is higher than Lucas\'s BMI that is ${boolean}.`);

// if else statement to compare the BMI

if(lucasHigherBMI > peterBMI){
    console.log(`Lucas' BMI (${lucasHigherBMI}) is higher than Peter\'s (${peterBMI})`);
}
else{
    console.log(`Peter\'s (${peterBMI}) is higher than Lucas' BMI (${lucasHigherBMI})`);
}

// function BMI = (lucasHigherBMI, peterBMI) =>{
//     const lucasHigherBMi > peterBMi ? ``
//     return (lucasHigherBMI)
// }

// PART D

// function for converting C => F and F=> C

// C => F

function convertCToF(fah){
    var tempF = fah;
    var CTofahr = Math.round((fah * 9 / 5) + 32);
    let mess = `From ${tempF}\xB0F is ${CTofahr}\xB0C.`
    console.log(mess);
}

// F=> C32

function convertFToC(Cel){
    var tempC = Cel;
    var fahrToC = Math.round((Cel - 32) * 5 / 9) ;
    let Temp = `From ${tempC}\xB0F is ${fahrToC}\xB0C.`
    console.log(Temp);
}

convertFToC(32);
convertCToF(100);