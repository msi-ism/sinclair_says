console.log('script is running...')

// ! Declaring various variables & functions for game

// ** Grabbing Pad Elements
let pad1 = document.getElementById('pad1')
let pad2 = document.getElementById('pad2')
let pad3 = document.getElementById('pad3')
let pad4 = document.getElementById('pad4')
let pad5 = document.getElementById('pad5')
let pad6 = document.getElementById('pad6')
let pad7 = document.getElementById('pad7')
let pad8 = document.getElementById('pad8')
let pad9 = document.getElementById('pad9')

// ** Pad Array Global Variable
const padArr = [pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9]

// ** Pad Light On & Off Variable
let padLight = '0px 0px 40px 20px rgba(253, 245, 232, 0.8), inset 0 0 25px 25px rgba(253, 245, 232, 0.3)'
let lightOff = ''

// ** Function to Light Individual Pads
const lightPad = (pad) => {
    pad.style.boxShadow = padLight
}
// ** Function to UnLight Individual Pads
const offPad = (pad) => {
    pad.style.boxShadow = lightOff
}
// ** Function to Light all pads at runtime

const lightEmUp = () => {
    setTimeout(function () { lightPad(pad1); }, 250)
    setTimeout(function () { lightPad(pad2); }, 400)
    setTimeout(function () { lightPad(pad3); }, 550)
    setTimeout(function () { lightPad(pad4); }, 700)
    setTimeout(function () { lightPad(pad5); }, 850)
    setTimeout(function () { lightPad(pad6); }, 1000)
    setTimeout(function () { lightPad(pad7); }, 1150)
    setTimeout(function () { lightPad(pad8); }, 1300)
    setTimeout(function () { lightPad(pad9); }, 1450)
}

// ** Function to UnLight all pads at runtime
const lightEmDown = () => {
    setTimeout(function () { offPad(pad1); }, 1500)
    setTimeout(function () { offPad(pad2); }, 1650)
    setTimeout(function () { offPad(pad3); }, 1800)
    setTimeout(function () { offPad(pad4); }, 1950)
    setTimeout(function () { offPad(pad5); }, 2100)
    setTimeout(function () { offPad(pad6); }, 2350)
    setTimeout(function () { offPad(pad7); }, 2500)
    setTimeout(function () { offPad(pad8); }, 2650)
    setTimeout(function () { offPad(pad9); }, 2800)

}


//** Creating function to blink all lights */
const blinkAll = () => {
    setTimeout(function () { lightPad(pad1); }, 100)
    setTimeout(function () { lightPad(pad2); }, 100)
    setTimeout(function () { lightPad(pad3); }, 100)
    setTimeout(function () { lightPad(pad4); }, 100)
    setTimeout(function () { lightPad(pad5); }, 100)
    setTimeout(function () { lightPad(pad6); }, 100)
    setTimeout(function () { lightPad(pad7); }, 100)
    setTimeout(function () { lightPad(pad8); }, 100)
    setTimeout(function () { lightPad(pad9); }, 100)
    setTimeout(function () { offPad(pad1); }, 250)
    setTimeout(function () { offPad(pad2); }, 250)
    setTimeout(function () { offPad(pad3); }, 250)
    setTimeout(function () { offPad(pad4); }, 250)
    setTimeout(function () { offPad(pad5); }, 250)
    setTimeout(function () { offPad(pad6); }, 250)
    setTimeout(function () { offPad(pad7); }, 250)
    setTimeout(function () { offPad(pad8); }, 250)
    setTimeout(function () { offPad(pad9); }, 250)
}

// ** Text Animation Function


let screenText = document.querySelector('.screen-text')
let displayText = screenText.textContent
let splitText = Array.from(displayText)
let yourTurnText = 'Your turn...'
let winnerText = 'Winner!'
let loser = 'Loser'
console.log(displayText.length)

screenText.textContent = ''

const animateScreen = () => {

    for (let i = 0; i < splitText.length; i++) {
        screenText.innerHTML += `<span>${splitText[i]}</span>`
    }
    console.log(screenText)

    const onTick = () => {
        const span = screenText.querySelectorAll("span")[char]
        span.classList.add('fade')
        char++
        if (char === splitText.length) {
            complete()
            return
        }
    }

    let char = 0
    let timer = setInterval(onTick, 50)

    const complete = () => {
        clearInterval(timer)
        timer = null;
    }
}

const showYourTurn = () => {
    screenText.textContent = 'Your turn...'
}




// ** Begins Function Objects

class Pad {
    constructor(name, color, tone, selectorVar) {
        this.name = name
        this.color = color
        this.tone = tone
        this.selectorVar = selectorVar
    }
    padTap() {
    }
}

const padObj1 = new Pad('pad-1', '#E8ECFB', 'A#', pad1)
const padObj2 = new Pad('pad-2', '#B997C7', 'B#', pad2)
const padObj3 = new Pad('pad-3', '#824D99', 'C#', pad3)
const padObj4 = new Pad('pad-4', '#4D78C3', 'D#', pad4)
const padObj5 = new Pad('pad-5', '#56A2AC', 'E#', pad5)
const padObj6 = new Pad('pad-6', '#7EB775', 'F#', pad6)
const padObj7 = new Pad('pad-7', '#CD2120', 'G#', pad7)
const padObj8 = new Pad('pad-8', 'E57F33', 'A#', pad8)
const padObj9 = new Pad('pad-9', '#D0B541', 'B#', pad9)

const padObjArr = [padObj1, padObj2, padObj3, padObj4, padObj5, padObj6, padObj7, padObj8, padObj9]

console.log(padObjArr[2]['selectorVar'])

// ** Adds Tap Lighting Effect to Individual Pads
padArr.forEach(pad => { pad.addEventListener('click', function () { padTap(this); }, false) })


// ! ************************** Game Logic Begins ***************************************


// ** Creating Function to Listen for User Input and Record to Array

let userChoices = []
const recordUserInput = (pad) => {
    pad.addEventListener('click', function (e) {
        userChoices.push(
            pad
        )
    })
    console.log(userChoices)
}

// ** Creating Event Listeners For Each Pad to add to userChoices Array
padArr.forEach(pad => { pad.addEventListener('click', recordUserInput(pad)) })



// ** Creating Level 1 Pattern
// let easyPatArr = [pad1, pad2, pad3, pad4, pad5]
let easyPatArr = []
let midPatArr = []
let hardPatArr = []
let randPatArr = []



const getRandPat = (num) => {
    for (let i = 0; i < num; i++) {
        let randomPad = Math.floor(Math.random() * padArr.length)
        randPatArr.push(padObjArr[randomPad]['selectorVar'])
    }
}




// const getEasyPat = () => {
//     for (let i = 0; i < 3; i++) {
//         let randomPad = Math.floor(Math.random() * padArr.length)
//         easyPatArr.push(padObjArr[randomPad]['selectorVar'])
//     }
// }
console.log(randPatArr)

// const getMidPat = () => {
//     for (let i = 0; i < 6; i++) {
//         let randomPad = Math.floor(Math.random() * padArr.length)
//         midPatArr.push(padObjArr[randomPad]['selectorVar'])
//     }
// }

// console.log(midPatArr)

// const getHardPat = () => {
//     for (let i = 0; i < 9; i++) {
//         let randomPad = Math.floor(Math.random() * padArr.length)
//         hardPatArr.push(padObjArr[randomPad]['selectorVar'])
//     }
// }
// console.log(hardPatArr)




// ** Creating Function to Check User Input against Pattern

let score = 0
let lives = 3
const scoreDisplay = document.getElementById('scorebox')
const livesDisplay = document.getElementById('lives-box')
scoreDisplay.textContent = score
livesDisplay.textContent = lives

let match = false
const checkAnswer = () => {

    if (userChoices.length === randPatArr.length) {
        for (let i = 0; i < randPatArr.length; i++) {
            console.log(randPatArr[i])
            console.log(userChoices[i])
            if (userChoices[i] !== randPatArr[i]) {
                console.log('false')
                return match = false
            }
        }
    } else {
        setTimeout(checkAnswer, 500) // run until true
    }
    return match = true
}

const displayResult = () => {
    if (userChoices.length === randPatArr.length && match === true) {
        screenText.textContent = 'Correct!'
        blinkTwiceQuick()
        score += 100
        scoreDisplay.textContent = score
    } else if (userChoices.length === randPatArr.length && match === false) {
        screenText.textContent = "That's not what I said!"
        lives--
        livesDisplay.textContent = lives
    } else {
        setTimeout(displayResult, 500) // run until true
    }
}


// ** Creating Function to run Easy Pattern

let playRand3Pattern = () => {
    setTimeout(function () { padTap(randPatArr[0]); }, 500)
    setTimeout(function () { padTap(randPatArr[1]); }, 1000)
    setTimeout(function () { padTap(randPatArr[2]); }, 1500)
}

let playRand5Pattern = () => {
    setTimeout(function () { padTap(randPatArr[0]); }, 500)
    setTimeout(function () { padTap(randPatArr[1]); }, 1000)
    setTimeout(function () { padTap(randPatArr[2]); }, 1500)
    setTimeout(function () { padTap(randPatArr[3]); }, 2000)
    setTimeout(function () { padTap(randPatArr[4]); }, 2500)
}

let playRand7Pattern = () => {
    setTimeout(function () { padTap(randPatArr[0]); }, 500)
    setTimeout(function () { padTap(randPatArr[1]); }, 1000)
    setTimeout(function () { padTap(randPatArr[2]); }, 1500)
    setTimeout(function () { padTap(randPatArr[3]); }, 2000)
    setTimeout(function () { padTap(randPatArr[4]); }, 2500)
    setTimeout(function () { padTap(randPatArr[3]); }, 3000)
    setTimeout(function () { padTap(randPatArr[4]); }, 3500)
}



// ! *************************** Game Initialization Begins ******************************


// ** Calling animateScreen, StartupLights & blinkTwice to Initialize Game

animateScreen()

const startUpLights = () => {
    lightEmUp()
    setTimeout(lightEmDown, 1000)

}
startUpLights()

const blinkTwiceStart = () => {
    setTimeout(blinkAll, 4000)
    setTimeout(blinkAll, 4250)
}

blinkTwiceStart()

const blinkTwiceQuick = () => {
    setTimeout(blinkAll, 300)
    setTimeout(blinkAll, 500)
}

const padTap = (pad) => {
    pad.style.boxShadow = padLight
    setTimeout(function () { offPad(pad); }, 250)

}

const wipeDisplay = () => {
    screenText.textContent = ''
}



const resetDisplayEasy = () => {
    if (screenText.textContent === 'Correct!' || screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(easyRound, 3000)
        round = 0
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayEasy, 500)
    }
}
const resetDisplayMed = () => {
    if (screenText.textContent === 'Correct!' || screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(midRound, 3000)
        round = 0
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayMed, 500)
    }
}
const resetDisplayHard = () => {
    if (screenText.textContent === 'Correct!' || screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(hardRound, 3000)
        round = 0
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayHard, 500)
    }
}



// ** Creating Round 1 - Easy


const easyRound = () => {
    if (score < 500 && lives > 0) {
        getRandPat(3)
        playRand3Pattern()
        setTimeout(showYourTurn, 2000)
        checkAnswer()
        displayResult()
        resetDisplayEasy()
    } else if (score >= 500 && lives > 0) {
        screenText.textContent = 'Winner!'
    } else {
        screenText.textContent = 'Game Over!'
    }
}

const midRound = () => {
    if (score < 500 && lives > 0) {
        getRandPat(5)
        playRand5Pattern()
        setTimeout(showYourTurn, 3000)
        checkAnswer()
        displayResult()
        resetDisplayMed()
    } else if (score >= 500 && lives > 0) {
        screenText.textContent = 'Winner!'
    } else {
        screenText.textContent = 'Game Over!'
    }        

}

const hardRound = () => {
    if (score < 500 && lives > 0) {
        getRandPat(7)
        playRand7Pattern()
        setTimeout(showYourTurn, 5000)
        checkAnswer()
        displayResult()
        resetDisplayHard()
    } else if (score >= 500 && lives > 0) {
        screenText.textContent = 'Winner!'
    } else {
        screenText.textContent = 'Game Over!'
    }    


}


const playEasyGame = () => {
    easyRound(playEasyGame)
    // setInterval(easyRound, 8000)
}


const playMedGame = () => {
    midRound(playMedGame)
    // setInterval(easyRound, 8000)
}


const playHardGame = () => {
    easyRound(playHardGame)
    // setInterval(easyRound, 8000)
}


const replay = () => {
    if (randPatArr.length === 3) {
        playRand3Pattern()
    } else if (randPatArr.length === 5) {
        playRand5Pattern()
    } else {
        playRand7Pattern()
    }

}





console.log(score)

const easyBtn = document.querySelector('#start')
const medBtn = document.querySelector('#med')
const hardBtn = document.querySelector('#hard')
const replayBtn = document.querySelector('#replay')



easyBtn.addEventListener('click', playEasyGame)
medBtn.addEventListener('click', playMedGame)
hardBtn.addEventListener('click', playHardGame)
replayBtn.addEventListener('click', replay)




// const checkBtn = document.querySelector('#check')
// checkBtn.addEventListener('click', checkAnswer)


// Need replay function