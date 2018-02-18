import * as React from 'react';
import { ProgressBarContainerProps } from './progress-bar-container';
import './progress-bar.css';

const ProgressBar: React.StatelessComponent<ProgressBarContainerProps
> = props => {
  const {
    min,
    max,
    onIncrement,
    onDecrement,
    progress,
    fillColor,
    bgColor,
    borderStyle,
    borderRadius,
    height,
    width,
    transition,
    demo,
  } = props;

  const generateMinLabel = min ? <span>{min}&nbsp;</span> : null;
  const generateMaxLabel = max ? <span>/&nbsp;{max}</span> : null;
  const generateDemoButtons =
    demo ? (
      <div>
        <button onClick={onIncrement}>+
        </button>
        <button onClick={onDecrement}>-
        </button>
      </div>
    ) : null;

  return (
    <div
      className="progress-bar"
      data-progress="10"
      style={{
        border: `${borderStyle}%`,
        borderRadius: `${borderRadius}px`,
        backgroundColor: `${bgColor}%`,
        width: `${width}%`,
        height: `${height}px`,
      }}
    >
      <div 
        className="progress-bar--inner" 
        style={{
          minWidth: `${min}%`,
          maxWidth: `${max}%`,
          backgroundColor: `${fillColor}`,
          borderRadius: `${borderRadius}px`,
          width: `${progress}%`,
          transition: `${transition}`,
        }} 
      />
      {generateMinLabel}
      {generateMaxLabel}
      {generateDemoButtons}
    </div>
  );
};

export default ProgressBar;
