const fs = require('fs')

print = input => console.log(input)

fs.readFile('D:\\Files\\Workpaces\\Adevent of code 2022\\Day 2\\input.txt', (err, data) => {
    processFile(data.toString())
})

function processFile(input) {
    translate =  {
        X: 'A',
        Y: 'B',
        Z: 'C'
    }

    win =  {
        A: 'B',
        B: 'C',
        C: 'A'
    }

    loose =  {
        A: 'C',
        B: 'A',
        C: 'B'
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

    // Rock, X = 1
    // Paper, Y = 2
    // Scissors, Z = 4
    
    pointsForMe =  {
        X: 1,
        Y: 2,
        Z: 3,        
        
        A: 1,
        B: 2,
        C: 3
    }
    
    GamePoints = (opponent, me) => {
        if(me == 'Y'){
            meTranslate = opponent;
            print('Draw')
        }
        if(me == 'X'){
            meTranslate = loose[opponent];
            print('loose')
        }
        if(me == 'Z'){
            meTranslate = win[opponent];
            print('win')
        }

        mePoints = pointsForMe[meTranslate]
    
        if(meTranslate == opponent) {
            return 3 + mePoints
        }
    
        if(meHasWon(opponent,meTranslate)){
            return 6 + mePoints
        }
        return 0 + mePoints
    }
    
    games = input.split('\n')
    
    endPoints = 0
    
    games.forEach(game => {
        a = game.replace("\r","").split(" ")
        opponent = a[0]
        me = a[1]

        points = GamePoints(opponent, me)
    
        endPoints += points
    });
    
    console.log(endPoints)
}
