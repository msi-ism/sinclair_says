// let a = ['div#pad2.pad.pad-2', 'div#pad3.pad.pad-3', 'div#pad9.pad.pad-9', 'div#pad4.pad.pad-4', 'div#pad3.pad.pad-3', 'div#pad2.pad.pad-2']
// let b = ['div#pad2.pad.pad-2', 'div#pad3.pad.pad-3', 'div#pad9.pad.pad-9', 'div#pad4.pad.pad-4', 'div#pad3.pad.pad-3', 'div#pad2.pad.pad-2']

// // const arrayTest = (arr1, arr2) => {
// // if (arr1.length === arr2.length) {
// //     for (let i = 0; i < a.length; i++) {
// //         if(arr1[i] === arr2[i]){
// //             return true
// //         } else {
// //             return false
// //         }
// //     }
// // }
// // }

// // console.log(arrayTest(a, b))

// function arrayEquals(a, b) {
//     return a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }

// console.log(arrayEquals(a, b))


// const checkAnswer = () => {
//     if (userChoices.every((val, index) => val === easyPatArr[index])) {
//         screenText.textContent = 'Correct!'
//         score += 100

//     } else {
//         setTimeout(checkAnswer, 500)
//     }
// }


// const checkAnswer = () => {
//     if (userChoices.length === easyPatArr.length) {
//         for (let i = 0; i < easyPatArr.length; i++) {
//             console.log(easyPatArr[i])
//             console.log(userChoices[i])
//             if (userChoices[i] !== easyPatArr[i]) {
//                 console.log('Incorrect')
//                 return false
//             } 
//         return true
//         }
//     } else {
//         setTimeout(checkAnswer, 500)

//     }
// }

// const displayResult = () => {
//     if (userChoices.length > 0 && userChoices.length === easyPatArr.length) {
//         if (checkAnswer === true)
//             screenText.textContent = 'Correct!'
//             score += 100
//             console.log(`The score is ${score}`)
//         } else {
//             screenText.textContent = "That's not what I said!"
//             score += 0
//         }
// }






// const checkAnswer = () => {
//     if (userChoices.length === easyPatArr.length) {
//         for (let i = 0; i < easyPatArr.length; i++) {
//             console.log(easyPatArr[i])
//             console.log(userChoices[i])
//             if (userChoices[i] === easyPatArr[i]) {
//                 result = true
//                 screenText.textContent = 'Correct!'
//                 score += 100
//                 console.log(`The score is ${score}`)

//             } else {
//                 result = false
//                 screenText.textContent = "That's not what I said!"
//                 score += 0
//             }
//         }
//         console.log(result)
//     } else {
//         setTimeout(checkAnswer, 500)
//     }
// }

let taskOne = () => {
    console.log('task1')
    
}
let taskTwo = () => {
    console.log('task 2')

}
let taskThree = () => {

}