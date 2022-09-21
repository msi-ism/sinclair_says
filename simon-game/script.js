console.log('script is running...')
// ****************** Declaring various variables & functions to setup game *********************

// & Pad Setup

// ^ Grabbing Pad Elements
let pad1 = document.getElementById('pad1')
let pad2 = document.getElementById('pad2')
let pad3 = document.getElementById('pad3')
let pad4 = document.getElementById('pad4')
let pad5 = document.getElementById('pad5')
let pad6 = document.getElementById('pad6')
let pad7 = document.getElementById('pad7')
let pad8 = document.getElementById('pad8')
let pad9 = document.getElementById('pad9')

// ^ Creating Pad Array Global Variable with an array of HTML elements
const padArr = [pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9]


// & Pad Lighting Effects

// ^ Pad Light On & Off Box Shadow Variable
let padLight = '0px 0px 40px 20px rgba(253, 245, 232, 0.8), inset 0 0 25px 25px rgba(253, 245, 232, 0.3)'
let redLight = '0px 0px 40px 20px rgba(253, 35, 33, 0.8), inset 0 0 25px 25px rgba(253, 43, 32, 0.3)'
let lightOff = ''

// ^ Function to Light Individual Pads
const lightPad = (pad) => {
    pad.style.boxShadow = padLight
}
// ^ Function to Light Individual Pads Red
const lightRedPad = (pad) => {
    pad.style.boxShadow = redLight
}
// ^ Function to UnLight Individual Pads
const offPad = (pad) => {
    pad.style.boxShadow = lightOff
}
// ^ Function to Light all pads at runtime

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
// ^ Function to UnLight all pads at runtime
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

// ^ Creating function to blink all lights */
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
// ^ Creating function to blink all lights red */

const blinkAllRed = () => {
    setTimeout(function () { lightRedPad(pad1); }, 100)
    setTimeout(function () { lightRedPad(pad2); }, 100)
    setTimeout(function () { lightRedPad(pad3); }, 100)
    setTimeout(function () { lightRedPad(pad4); }, 100)
    setTimeout(function () { lightRedPad(pad5); }, 100)
    setTimeout(function () { lightRedPad(pad6); }, 100)
    setTimeout(function () { lightRedPad(pad7); }, 100)
    setTimeout(function () { lightRedPad(pad8); }, 100)
    setTimeout(function () { lightRedPad(pad9); }, 100)
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

// ^ Adds Tap Lighting Effect to Individual Pads Using For Each
padArr.forEach(pad => { pad.addEventListener('click', function () { padTap(this); }, false) })

// ^ Function that plays start up lights on initialization
const startUpLights = () => {
    lightEmUp()
    setTimeout(lightEmDown, 1000)

}
// ^ Function that plays blinks all lights twice
const blinkTwiceStart = () => {
    setTimeout(blinkAll, 4000)
    setTimeout(blinkAll, 4250)
}

// ^ Function that plays blinks all lights twice quickly
const blinkTwiceQuick = () => {
    setTimeout(blinkAll, 300)
    setTimeout(blinkAll, 500)
}
// ^ Function that plays blinks all lights 3x slowly
const blinkThriceSlow = () => {
    setTimeout(blinkAll, 0)
    setTimeout(blinkAll, 750)
    setTimeout(blinkAll, 1500)
}
// ^ Function that plays blinks RED quickly
const blinkTwiceRed = () => {
    setTimeout(blinkAllRed, 300)
    setTimeout(blinkAllRed, 500)
}
// ^ Function that lights pad when clicked by user
const padTap = (pad) => {
    pad.style.boxShadow = padLight
    setTimeout(function () { offPad(pad); }, 250)
}

// & Screen Text Animation Function

// ^ Setting up variables needed
let screenText = document.querySelector('.screen-text')
let displayText = screenText.textContent
let splitText = Array.from(displayText)
screenText.textContent = ''

// ^ Function that animates screen by splitting, looping, print within span and styling that span
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


// & Creating Function Objects and Methods

// ^ Creating 'Pad' class with constructor
class Pad {
    constructor(name, color, tone, selectorVar, audioSrc) {
        this.name = name
        this.color = color
        this.tone = tone
        this.selectorVar = selectorVar
        this.audioSrc = audioSrc
    }
    padTap() {
    }
    playPad() {
        let audio = new Audio(this.audioSrc)
        audio.play()
    }
}

// ^ Declaring Pad Object variables
const padObj1 = new Pad('pad-1', '#E8ECFB', 'A#', pad1, 'audio/pad1.mp3')
const padObj2 = new Pad('pad-2', '#B997C7', 'B#', pad2, 'audio/pad2.mp3')
const padObj3 = new Pad('pad-3', '#824D99', 'C#', pad3, 'audio/pad3.mp3')
const padObj4 = new Pad('pad-4', '#4D78C3', 'D#', pad4, 'audio/pad4.mp3')
const padObj5 = new Pad('pad-5', '#56A2AC', 'E#', pad5, 'audio/pad5.mp3')
const padObj6 = new Pad('pad-6', '#7EB775', 'F#', pad6, 'audio/pad6.mp3')
const padObj7 = new Pad('pad-7', '#CD2120', 'G#', pad7, 'audio/pad7.mp3')
const padObj8 = new Pad('pad-8', 'E57F33', 'A#', pad8, 'audio/pad8.mp3')
const padObj9 = new Pad('pad-9', '#D0B541', 'B#', pad9, 'audio/pad9.mp3')

// ^ Placing Pad Objects in array for future use
const padObjArr = [padObj1, padObj2, padObj3, padObj4, padObj5, padObj6, padObj7, padObj8, padObj9]

// & Begins Audio Effects

// ^ Function created to play pad sound when user clicks on pad 
const tapAudio = (pad) => {
    let audio = document.getElementById(`${pad.id}-audio`)
    audio.play()
}

// ^ Function created to play pad sound automatically - created to play sound during pattern playback
const autoAudio = (obj) => {
    obj.playPad()
}

// ^ For each to add the tapAudio function to each pad
padArr.forEach(pad => { pad.addEventListener('click', function () { tapAudio(this); }, false) })



// **************************** Game Logic Begins ***************************************


// & Begins game setup variables


// ^ Creating Function to Listen for User Input and Record to Array called User Choices

let userChoices = []
const recordUserInput = (pad) => {
    pad.addEventListener('click', function (e) {
        userChoices.push(
            pad
        )
    })
    console.log(userChoices)
}

// ^ Creating Event Listeners For Each Pad to add to userChoices Array
padArr.forEach(pad => { pad.addEventListener('click', recordUserInput(pad)) })



// ^ Creating Empty Array to Hold Pattern that is generated
let randPatArr = []

// ^ Creating a Function that generates an array of Random pads with length determined by num passed
const getRandPat = (num) => {
    for (let i = 0; i < num; i++) {
        let randomPad = Math.floor(Math.random() * padArr.length)
        randPatArr.push(padObjArr[randomPad])
    }
}



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
            if (userChoices[i] !== randPatArr[i]['selectorVar']) {
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
    setTimeout(function () { padTap(randPatArr[0]['selectorVar']); }, 500)
    setTimeout(function () { autoAudio(randPatArr[0]); }, 500)
    setTimeout(function () { padTap(randPatArr[1]['selectorVar']); }, 1250)
    setTimeout(function () { autoAudio(randPatArr[1]); }, 1250)
    setTimeout(function () { padTap(randPatArr[2]['selectorVar']); }, 2000)
    setTimeout(function () { autoAudio(randPatArr[2]); }, 2000)
}

let playRand5Pattern = () => {
    setTimeout(function () { padTap(randPatArr[0]['selectorVar']); }, 500)
    setTimeout(function () { autoAudio(randPatArr[0]); }, 500)
    setTimeout(function () { padTap(randPatArr[1]['selectorVar']); }, 1250)
    setTimeout(function () { autoAudio(randPatArr[1]); }, 1250)
    setTimeout(function () { padTap(randPatArr[2]['selectorVar']); }, 2000)
    setTimeout(function () { autoAudio(randPatArr[2]); }, 2000)
    setTimeout(function () { padTap(randPatArr[3]['selectorVar']); }, 2750)
    setTimeout(function () { autoAudio(randPatArr[3]); }, 2750)
    setTimeout(function () { padTap(randPatArr[4]['selectorVar']); }, 3500)
    setTimeout(function () { autoAudio(randPatArr[4]); }, 3500)
}

let playRand7Pattern = () => {
    setTimeout(function () { padTap(randPatArr[0]['selectorVar']); }, 500)
    setTimeout(function () { padTap(randPatArr[1]['selectorVar']); }, 1250)
    setTimeout(function () { padTap(randPatArr[2]['selectorVar']); }, 1750)
    setTimeout(function () { padTap(randPatArr[3]['selectorVar']); }, 2000)
    setTimeout(function () { padTap(randPatArr[4]['selectorVar']); }, 2500)
    setTimeout(function () { padTap(randPatArr[3]['selectorVar']); }, 3000)
    setTimeout(function () { padTap(randPatArr[4]['selectorVar']); }, 3500)
}



// ! *************************** Game Initialization Begins ******************************


// ** Calling animateScreen, StartupLights & blinkTwice to Initialize Game

animateScreen()



startUpLights()
blinkTwiceStart()

const wipeDisplay = () => {
    screenText.textContent = ''
}

let wrongAudio = new Audio(`audio/all_pads.mp3`)



const resetDisplayEasy = () => {
    if (screenText.textContent === 'Correct!') {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(easyRound, 3000)
        blinkTwiceQuick()
        userChoices = []
        randPatArr = []
    } else if (screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(easyRound, 3000)
        blinkTwiceRed()
        wrongAudio.play()
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayEasy, 500)
    }
}

const resetDisplayMed = () => {
    if (screenText.textContent === 'Correct!') {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(medRound, 3000)
        blinkTwiceQuick()
        userChoices = []
        randPatArr = []
    } else if (screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(medRound, 3000)
        blinkTwiceRed()
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayMed, 500)
    }
}
const resetDisplayHard = () => {
    if (screenText.textContent === 'Correct!') {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(hardRound, 3000)
        blinkTwiceQuick()
        userChoices = []
        randPatArr = []
    } else if (screenText.textContent === "That's not what I said!") {
        setTimeout(wipeDisplay, 1000)
        setTimeout(animateScreen, 1750)
        setTimeout(hardRound, 3000)
        blinkTwiceRed()
        userChoices = []
        randPatArr = []
    } else {
        setTimeout(resetDisplayHard, 500)
    }
}






// ** Creating Rounds Easy(3), Mid(5), Hard(7)


let freeze = false
//let padGroup = document.querySelector('.pad-group')

// Don't know why this works
document.addEventListener("click", freezeClickOff, true);
    
function freezeClickOff(e) {
    if (freeze === true) {
        e.stopPropagation();
        e.preventDefault();
 }
}

const clickOn = () => {
    freeze = false
}

const easyRound = () => {
    if (score < 300 && lives > 0) {
        freeze = true
        userChoices = []
        getRandPat(3)
        setTimeout(playRand3Pattern, 2100)
        setTimeout(showYourTurn, 4500)
        setTimeout(clickOn, 4500)
        checkAnswer()
        displayResult()
        resetDisplayEasy()
    } else if (score >= 300 && lives > 0) {
        screenText.textContent = 'You Win!!'
        startUpLights()
        setTimeout(blinkAll, 4000)
        setTimeout(blinkTwiceQuick, 4500)
    } else {
        screenText.textContent = 'Game Over!'
    }
}

const medRound = () => {
    if (score < 500 && lives > 0) {
        freeze = true
        userChoices = []
        getRandPat(5)
        setTimeout(playRand5Pattern, 2100)
        setTimeout(showYourTurn, 6200)
        setTimeout(clickOn, 6200)
        checkAnswer()
        displayResult()
        resetDisplayMed()
    } else if (score >= 500 && lives > 0) {
        screenText.textContent = 'You Win!!'
    } else {
        screenText.textContent = 'Game Over!'
    }

}

const hardRound = () => {
    if (score < 500 && lives > 0) {
        userChoices = []
        getRandPat(7)
        setTimeout(playRand7Pattern)
        setTimeout(showYourTurn, 8000)
        checkAnswer()
        displayResult()
        resetDisplayHard()
    } else if (score >= 500 && lives > 0) {
        screenText.textContent = 'You Win!!'
    } else {
        screenText.textContent = 'Game Over!'
    }

}


const playEasyGame = () => {
    blinkThriceSlow()
    easyRound(playEasyGame)
    // setInterval(easyRound, 8000)
}


const playMedGame = () => {
    blinkThriceSlow()
    medRound(playMedGame)
    // setInterval(easyRound, 8000)
}


const playHardGame = () => {
    blinkThriceSlow()
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

const stopFunction = () => {
    clearTimeout(easyRound)
}

const reset = () => {
    location.reload()

}





console.log(score)

const easyBtn = document.querySelector('#start')
const medBtn = document.querySelector('#med')
const hardBtn = document.querySelector('#hard')
const replayBtn = document.querySelector('#replay')
const resetBtn = document.querySelector('#reset')



easyBtn.addEventListener('click', playEasyGame)
medBtn.addEventListener('click', playMedGame)
hardBtn.addEventListener('click', playHardGame)
replayBtn.addEventListener('click', replay)
resetBtn.addEventListener('click', reset)




// const checkBtn = document.querySelector('#check')
// checkBtn.addEventListener('click', checkAnswer)


// Need replay function