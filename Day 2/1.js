const fs = require('fs')

fs.readFile('D:\\Files\\Workpaces\\Adevent of code 2022\\Day 2\\input.txt', (err, data) => {
    processFile(data.toString())
})

function processFile(input) {
    translate =  {
        X: 'A',
        Y: 'B',
        Z: 'C'
    }
    
    meHasWon = (opponent, me) => {
        if(me == 'A') {
            if(opponent == 'B') {
                return false;
            }
            if(opponent == 'C') {
                return true;
            }
        }
        if(me == 'B') {
            if(opponent == 'A') {
                return true;
            }
            if(opponent == 'C') {
                return false;
            }
        }
        if(me == 'C') {
            if(opponent == 'A') {
                return false;
            }
            if(opponent == 'B') {
                return true;
            }
        }
    }
    
    GamePoints = (opponent, me) => {
        meTranslate = translate[me]
    
        if(meTranslate == opponent) {
            return 3
        }
    
        if(meHasWon(opponent,meTranslate)){
            return 6
        }
        return 0
    }
    
    // Rock, X = 1
    // Paper, Y = 2
    // Scissors, Z = 4
    
    pointsForMe =  {
        X: 1,
        Y: 2,
        Z: 3
    }
    
    games = input.split('\n')
    
    endPoints = 0
    
    games.forEach(game => {
        a = game.replace("\r","").split(" ")
        opponent = a[0]
        me = a[1]

        points = pointsForMe[me] + GamePoints(opponent, me)
    
        endPoints += points
    });
    
    console.log(endPoints)
}
