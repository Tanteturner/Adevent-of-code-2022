const { equal } = require('assert')
const { publicEncrypt } = require('crypto')
const fs = require('fs')

print = input => console.log(input)

fs.readFile('Day 3\\input.txt', (err, data) => {
    processFile(data.toString())
})

getEqalsInRucksack = (rucksack) => {
    let equal = ""
    rucksack[0].split('').forEach(item => {
        rucksack[1].split('').forEach(item2 => {
            if(item == item2) {
                equal = item
            }
        })
    })
    return equal;
}

function processFile(input) {

    let inputs = input.split('\n')

    let rucksacks = inputs.map(element => {
        element = element.replace('\r','')
        let halfIndex = Math.floor((element.length +1) / 2);

        let compartmentOne = element.substring(0,halfIndex);
        let compartmentTwo = element.substring(halfIndex);

        return [compartmentOne,compartmentTwo]
    });

    let equals = rucksacks.map(rucksack => getEqalsInRucksack(rucksack));

    let values = equals.map(letter => {
        if(letter == "") return 0
        
        charcode = letter.charCodeAt(0)

        if(charcode <= 90){ //UPPERCASE
            charcode -= 64
            charcode += 26
        }
        else{ //lowercase
            charcode -= 96
        }
        
        return charcode;
    })

    values

    let total = values.reduce(function(a,b){ return +a + +b; });

    print(total)
}
