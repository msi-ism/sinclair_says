console.log('script is running...')

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
    setTimeout(function () { offPad(pad2); }, 1500)
    setTimeout(function () { offPad(pad3); }, 1500)
    setTimeout(function () { offPad(pad4); }, 1500)
    setTimeout(function () { offPad(pad5); }, 1500)
    setTimeout(function () { offPad(pad6); }, 1500)
    setTimeout(function () { offPad(pad7); }, 1500)
    setTimeout(function () { offPad(pad8); }, 1500)
    setTimeout(function () { offPad(pad9); }, 1500)

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
    setTimeout(function () { offPad(pad1); }, 200)
    setTimeout(function () { offPad(pad2); }, 200)
    setTimeout(function () { offPad(pad3); }, 200)
    setTimeout(function () { offPad(pad4); }, 200)
    setTimeout(function () { offPad(pad5); }, 200)
    setTimeout(function () { offPad(pad6); }, 200)
    setTimeout(function () { offPad(pad7); }, 200)
    setTimeout(function () { offPad(pad8); }, 200)
    setTimeout(function () { offPad(pad9); }, 200)
}

// ** Text Animation Function


let screenText = document.querySelector('.screen-text')
let displayText = screenText.textContent
let splitText = Array.from(displayText)
console.log(displayText.length)

screenText.textContent = ''

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



// ** Calling StartupLights & blinkTwice to Initialize Game

const startUpLights = () => {
    lightEmUp()
    setTimeout(lightEmDown, 1000)

}
startUpLights()

const blinkTwice = () => {
    setTimeout(blinkAll, 1500)
    setTimeout(blinkAll, 1750)
}

blinkTwice()

const padTap = (pad) => {
    pad.style.boxShadow = padLight
    setTimeout(function () { offPad(pad); }, 250)

}


// ** Adds Tap Lighting Effect to Individual Pads
padArr.forEach(pad => { pad.addEventListener('click', function () { padTap(this); }, false) })



// ** Game Logic Begins **


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


const getEasyPat = () => {
    for (let i = 0; i < 5; i++) {
        let randomPad = Math.floor(Math.random() * padArr.length)
        easyPatArr.push(padObjArr[randomPad]['selectorVar'])
    }
}
getEasyPat()

console.log(easyPatArr)

// ** Creating Function to Check User Input against Pattern

const checkAnswer = () => {
    for (let i = 0; i < easyPatArr.length; i++) {
        console.log(easyPatArr[i])
        console.log(userChoices[i])
        if (userChoices[i] === easyPatArr[i]) {
            result = true
            
        } else {
            console.log("Not a match")
            result = false
        }
    }
    console.log(result)
}

// ** Creating Function to run Easy Pattern

let playEasyPattern = () => {
    setTimeout(function () { padTap(easyPatArr[0]); }, 500)
    setTimeout(function () { padTap(easyPatArr[1]); }, 1000)
    setTimeout(function () { padTap(easyPatArr[2]); }, 1500)
    setTimeout(function () { padTap(easyPatArr[3]); }, 2000)
    setTimeout(function () { padTap(easyPatArr[4]); }, 2500)

}

const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', playEasyPattern)

const checkBtn = document.querySelector('#check')
checkBtn.addEventListener('click', checkAnswer)



// Need replay function