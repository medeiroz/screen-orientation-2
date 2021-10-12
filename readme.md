> Get the current screen orientation


## Install

```
$ npm install --save screen-orientation-2
```

or 

```
$ npm add screen-orientation-2
```


## Usage

Import module

```js
const screenOrientation = require('screen-orientation-2')
```

```js
screenOrientation()
//=> {direction: 'landscape', version: 'primary', angle: 0}
```
Or
```js
screenOrientation.getScreenOrientation()
//=> {direction: 'landscape', version: 'primary', angle: 0}
```

```js
screenOrientation.addEventOnOrientationChange((newOrientation) => {
  console.log(newOrientation)
  //=> {direction: 'landscape', version: 'primary', angle: 0}
})
```

```js
screenOrientation.removeEventOnOrientationChange()
//=> void
```

```js
screenOrientation.setUseOrientation()
//=> void
```

```js
screenOrientation.setUseWindowSize()
//=> void
```

## API

#### `screenOrientation()` -> `object`

Returns the current screen orientation (direction, version and angle).

#### `screenOrientation.getScreenOrientation()` -> `object`

Returns the current screen orientation (direction, version and angle).

#### `screenOrientation.addEventOnOrientationChange(callback)` -> `void`

Add a callback function when screen orientation is changed

Example:
```js
const refreshFrames(newOrientation) {
  // myFunction (newOrientation.direction, newOrientation.version)
};

screenOrientation.addEventOnOrientationChange(refreshFrames)
```

#### `screenOrientation.removeEventOnOrientationChange()` -> `void`

Remove a callback function when screen orientation is changed


#### `screenOrientation.setUseOrientation()` -> `void`

Force use window.screen.orientation object

#### `screenOrientation.setUseWindowSize()` -> `void`

Force use window size

## License

MIT © [Medeiros Dev](https://github/MedeirosDev)
