import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProgressBarContainer from './progress-bar-container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <ProgressBarContainer
    min={20}
    max={50}
  />,
  document.getElementById('root-1') as HTMLElement
);

ReactDOM.render(
  <ProgressBarContainer 
    shouldSelfIncrement={true}
    selfIncrementInterval={70}
    fillColor="#9ac3ff"
  />,
  document.getElementById('root-2') as HTMLElement
);

ReactDOM.render(
  <ProgressBarContainer
    fillColor="#a8b0bd"
    height={25}
    borderRadius={30}
    shouldSelfIncrement={true}
    selfIncrementInterval={200}
  />,
  document.getElementById('root-3') as HTMLElement
);

ReactDOM.render(
  <ProgressBarContainer 
    fillColor="#f8ae41"
    transition="width 600ms ease-in-out"
    demo={true}
  />,
  document.getElementById('root-4') as HTMLElement
);

ReactDOM.render(
  <ProgressBarContainer 
    fillColor="#fb7f78"
    height={10}
    shouldSelfIncrement={true}
    selfIncrementInterval={150}
    borderRadius={30}
    transition="width 200ms ease-in-out"
  />,
  document.getElementById('root-5') as HTMLElement
);
registerServiceWorker();
