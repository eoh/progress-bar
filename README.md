# Progress Bar with React and Typescript

### optional props to override CSS

| name          | type           | default  | description                                             |
| ------------- |-------------   | ---------| -------------------------------------------------------- 
| min                  | number  | 0        | custom progress bar minimum-starting point              |
| max                  | number  |   100    | custom progress bar maximum-ending point                |
| shouldSelfIncrement  | boolean |  false   | progress bar will increment automatically               |
| selfIncrementInterval| number  |    500ms | if set to true, the interval time for auto incrementing |
| fillColor            | string  |  #9DDB29 | hex-color for progress bar foreground          |
| bgColor           | string  |  #f0ecec | hex-color for progress bar background          |
| borderStyle          | string  |    1px solid #f9f9f9    | hex-color for progress bar border          |
| borderRadius         | number  |    5px    | progress bar border-radius in px          |
| height               | number  |    15px    |      progress bar height     |
| width                | number  |    500px    | progress bar width          |
| transition           | number  |    600ms    | transition ease-in-out           |
| demoMode             | boolean |  true     | displays increment buttons
	
### Basic usage
```javascript
import ProgressBarContainer from './progress-bar-container';

var component = React.createClass({
  render: function() {
    return (
      <div>
        <ProgressBarContainer />
      </div>
    );
  }
});
```
### Setting ```min``` or ```max```
```javascript
<ProgressBarContainer min={20} max={75} />
```
### A self-incrementing progress bar
```javascript
<ProgressBarContainer 
  shouldSelfIncrement={true}
  selfIncrementInterval={70} 
/>
```
### Using custom CSS
```javascript
<ProgressBarContainer
  fillColor="#9ac3ff"
  height={25}
  borderRadius={30}
  borderStyle="2px solid #ccc"
/>
```
