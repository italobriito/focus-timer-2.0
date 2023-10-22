import state from './state.js'
import * as sounds from './sound.js'
import * as timer from './timer.js'
import * as el from './elements.js'


export function toggleRunning (){
  state.isRunning = document.documentElement.classList.toggle('running')
  
  timer.countdown()
  sounds.pressButtonSound.play()
}

export function resetTimer (){
  state.isRunning = false
  document.documentElement.classList.remove('running')

  timer.updateDisplay()
  sounds.pressButtonSound.play()
 }

export function addFiveMinutes () {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
  if( minutes >= 60){
  return
  }

  timer.updateDisplay(minutes+5,seconds)  
}

export function removeFiveMinutes (){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  
 if( minutes <= 4){
  return
 }

  timer.updateDisplay(minutes-5,seconds)
}

export function playForestSound (){
  
  state.isSoundForestOn = !state.isSoundForestOn
  
  if (state.isSoundForestOn === true){
  document.documentElement.classList.add('forestSoundOn')
    
  sounds.playForestSound.play()
  return
  }
    
  document.documentElement.classList.remove("forestSoundOn")
  sounds.playForestSound.pause()   
}

export function playRainSound (){

  state.isSoundRainOn = !state.isSoundRainOn

  if (state.isSoundRainOn === true){
  document.documentElement.classList.add('rainSoundOn')
  
  sounds.playRainSound.play()
  return
  }
  
  document.documentElement.classList.remove("rainSoundOn")
  sounds.playRainSound.pause()    
}

export function playCoffeShopSound (){

  state.isSoundCoffeShopOn = !state.isSoundCoffeShopOn

  if (state.isSoundCoffeShopOn === true){
  document.documentElement.classList.add('coffeShopSoundOn')
  
  sounds.playCoffeShopSound.play()
  return
}
  
document.documentElement.classList.remove("coffeShopSoundOn")
sounds.playCoffeShopSound.pause() 
}

export function playFireplaceSound (){
  state.isSoundFireplaceOn = !state.isSoundFireplaceOn

  if (state.isSoundFireplaceOn === true) {
  document.documentElement.classList.add('fireplaceSoundOn')
  
  sounds.playFireplaceSound.play()
  return
  }
  
  document.documentElement.classList.remove("fireplaceSoundOn")
  sounds.playFireplaceSound.pause() 
}

