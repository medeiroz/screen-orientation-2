'use strict'

const window = require('global/window')

let handlerCallback
let useOrientation

function setUseOrientation () {
  useOrientation = true
}

function setUseWindowSize () {
  useOrientation = false
}

function getScreenOrientation (orientationEvent) {
  const { type, angle } = orientationEvent || getOrientation()
  const [direction, version] = type.split('-')

  return {
    direction,
    version,
    angle
  }
}

function addEventOnOrientationChange (callback) {
  handlerCallback = callback

  if (shouldUseOrientation()) {
    window.screen.orientation.addEventListener('change', handleOrientationChange, false)
  } else {
    window.addEventListener('resize', handleResize, false)
  }
}

function removeEventOnOrientationChange () {
  if (shouldUseOrientation()) {
    window.screen.orientation.removeEventListener('change', handleOrientationChange)
  } else {
    window.removeEventListener('resize', handleResize)
  }
}

function shouldUseOrientation () {
  if (useOrientation === true) {
    return true
  } else if (useOrientation === false) {
    return false
  }

  return (window.screen !== undefined && window.screen.orientation !== undefined)
}

function getOrientation () {
  return shouldUseOrientation()
    ? window.screen.orientation
    : detect(window)
}

function detect (windowtarget) {
  const x = windowtarget.innerWidth
  const y = windowtarget.innerHeight

  return {
    type: x >= y ? 'landscape-primary' : 'portrait-primary',
    angle: 0
  }
}

function handleOrientationChange (event) {
  return handlerCallback(getScreenOrientation(event.target))
}

function handleResize (event) {
  return handlerCallback(getScreenOrientation(detect(event.target)))
}

const screenOrientationModule = module.exports = getScreenOrientation

screenOrientationModule.setUseOrientation = setUseOrientation
screenOrientationModule.setUseWindowSize = setUseWindowSize
screenOrientationModule.getScreenOrientation = getScreenOrientation
screenOrientationModule.addEventOnOrientationChange = addEventOnOrientationChange
screenOrientationModule.removeEventOnOrientationChange = removeEventOnOrientationChange
