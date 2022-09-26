# Project 1 - Sinclair (Simon) Says

## Description

This game is my own take on the classic game 'Simon Says'. The CPU will generate a pattern of lights and sound and the user must repeat the pattern correctly to score.

The UI is based on a drum machine used for music production. Each pad will play a specified sound (or group of sounds) like a drum machine.

## How to Play
        
Welcome to Sinclair Says! This is a simple memory game based off of the childhood classic Simon Says. The game begins in freeplay mode where you are free to click pads & play their corresponding notes. Maybe you can write a little melody?
   
The second mode is the memory game you're familiar with. Click Easy, Medium, or Hard to play a round of that difficulty.
After clicking a play button, the game will give you a countdown of 3 blinks before starting the pattern that you'll need to repeat once you see 'Your turn'.
   
Players win by reaching the score threshold which is 500 points or lose by running out of lives. Each time you guess incorrectly, you lose a life.

## Images
Original Simon Game

<img src="./images/simonsays.png" width="400">

My Simon Game

<img src="./images/ss-new-ui.png" width="600">

Drum Machine that inspired the design

<img src="./images/maschine.png" width="400">



## Tech Stack
    - Javascript - 60%
    - CSS - 30%
    - HTML - 10%
    

## Upcoming Features
- Increasing difficulty with progress
- Record option for freeplay mode with local saves
- High score tracker
- Option to select different tone types
- Volume Control Knob
- Mobile Responsiveness
- Option to switch to 'endless' mode
- More information displayed on screen
- Animate all on-screen text
- Increasing pattern speed incrementally based on difficulty


## Known Issues
    - clicking too fast will cause sound to not play
    - accidentally selecting pad during pattern playback will cause User input to not match
    - sound popping when two sounds play too quickly in succession