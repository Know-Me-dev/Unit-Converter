/*
1 meter = 3.281 feet
1 feet =   meter
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// !!!!!!!!!! FIRST METHOD WITH AN EMPTY STRING BUT NOT GIVING PARAMETERS AND ARGUMENTS !!!!!!!!
let conversionArray = ""
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const paraElOne = document.getElementById("para-el-1")
const paraElTwo = document.getElementById("para-el-2")
const paraElThree = document.getElementById("para-el-3")


 const units = [{
     meters: 3.281,
     liters:  0.264,
     kilograms: 2.204 
     
 }]

convertBtn.addEventListener('click', function(){
    conversionArray = inputEl.value
    // inputEl.value = ""
    // console.log(conversionArray)
    render()
    // console.log(units[0])
   
})

function render(){
    let metersIntoFeets = conversionArray * units[0].meters
    let feetsIntoMeters = conversionArray / units[0].meters
    let litersIntoGallons = conversionArray * units[0].liters
    let gallonsIntoLiters = conversionArray / units[0].liters
    let kilosIntoPounds = conversionArray * units[0].kilograms
    let poundsIntoKilos = conversionArray / units[0].kilograms
   
    paraElOne.innerHTML = `
    ${conversionArray}  Meters = ${metersIntoFeets.toFixed(3)} Feet
    |
    ${conversionArray} Feet = ${feetsIntoMeters.toFixed(3)} Meters
    `
    paraElTwo.innerHTML = `
    ${conversionArray} Liters = ${litersIntoGallons.toFixed(3)} Gallons
    |
    ${conversionArray} Gallons = ${gallonsIntoLiters.toFixed(3)} Liters
    `
    paraElThree.innerHTML = `
    ${conversionArray} Kilograms = ${kilosIntoPounds.toFixed(3)} Pounds
    |
    ${conversionArray} Pounds = ${poundsIntoKilos.toFixed(3)} Kilograms
    `
}

//  let total = render(20,3281) 
//  console.log(total)




// !!!!!!!!!!!  2nd METHOD WITH AN ARRAY AND PASSING THE VALUE OF FUNCTION WITH PARAMETERS AND VARIABLE ARGUMENTS !!!!!!!!



// let conversionArray = []
// const inputEl = document.getElementById("input-el")
// const convertBtn = document.getElementById("convert-btn")
// const paraEl = document.getElementById("para-el")


//  const units = [{
//      meters: 3.281,
//      liters:  0.264,
//      kilograms: 2.204 
     
//  }]

// convertBtn.addEventListener('click', function(){
//     conversionArray.push(inputEl.value)
//     // inputEl.value = ""
//     // console.log(conversionArray)
//     render(conversionArray , units[0].meters, units[0].liters, units[0].kilograms )
//     empty()
//     // console.log(units[0])
   
// })

// function render(num1, num2, num3, num4){
//     let metersIntoFeets =  num1 * num2
//     let feetsIntoMeters =  num1 / num2
//     let litersIntoGallons = num1 * num3
//     let gallonsIntoLiters = num1 / num3
//     let kilosIntoPounds =  num1 * num4
//     let poundsIntoKilos =  num1 / num4
//     //  if (conversionArray){
         
//     //  } else {
//     //      return null
//     //  }
//     paraEl.textContent = `
//     ${conversionArray} meters = ${metersIntoFeets.toFixed(3)} feets
//     |
//     ${conversionArray} feets = ${feetsIntoMeters.toFixed(3)} meters
    
//     ${conversionArray} liters = ${litersIntoGallons.toFixed(3)} gallons
//     |
//     ${conversionArray} gallons = ${gallonsIntoLiters.toFixed(3)} liters

//     ${conversionArray} kilos = ${kilosIntoPounds.toFixed(3)} pounds
//     |
//     ${conversionArray} pounds = ${poundsIntoKilos.toFixed(3)} kilos
//     `
    
// }

// function empty(){
//     conversionArray = []
// }

