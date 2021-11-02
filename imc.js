let nome = "Renan" // Seu nome
let peso = 80 // em kg
let altura = 1.81// em metros
let altura2= altura**2
let imc = (peso/altura2)
console.log(nome)
console.log(peso+" KGs")
console.log(altura+" Metros")
console.log(`Seu IMC: ${imc}`)  // interpolação

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal")
} else if (imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso")
} else if (imc >= 30 && imc <= 34.9){
    console.log("Obesidade 1")
} else if (imc <= 35 && imc <= 39.9){
    console.log("Obesidade 2")
} else {
    console.log("obesidae morbida")
}