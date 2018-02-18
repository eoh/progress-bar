import * as React from 'react';
import ProgressBar from './progress-bar';

export interface ProgressBarContainerProps {
  /**
   * Defines the minimum value
   */
  min?: number;
  /**
   * Defines the maximum value
   */
  max?: number;
  /**
   * Defines the minimum value
   */
  onIncrement?: () => void;
  onDecrement?: () => void;
  /**
   * Defines the minimum value
   */
  progress?: number;
  /**
   * Determine if progress bar should self-increment
   */
  shouldSelfIncrement?: boolean;
  /**
   * Defines the interval value for incrementing
   */
  selfIncrementInterval?: number;
  /**
   * Defines the main progress bar color
   */
  fillColor?: string;
  /**
   * Defines the background color
   */
  bgColor?: string;
  /**
   * Defines the border style
   */
  borderStyle?: string;
  /**
   * Defines the border-radius
   */
  borderRadius?: number;
  /**
   * Defines the height
   */
  height?: number;
  /**
   * Defines the width
   */
  width?: number;
  /**
   * Defines the transition
   */
  transition?: string;
  /**
   * Renders increment and decrement buttons
   */
  demo?: boolean;
}

export interface ProgressBarContainerState {
  progress: number;
}

export default class ProgressBarContainer extends React.PureComponent<
  ProgressBarContainerProps,
  ProgressBarContainerState
  > {
    public intervalId: number;
    public timerId: number;

    constructor(props: ProgressBarContainerProps) {
    super(props);
    
    this.state = {
      progress: 0,
    };
  }

  render() {
    return (
      <div className="progress-bar-container">
        <ProgressBar 
          min={this.props.min}
          max={this.props.max}
          onIncrement={this.onIncrementClick}
          onDecrement={this.onDecrementClick}
          progress={this.state.progress}
          fillColor={this.props.fillColor}
          bgColor={this.props.bgColor}
          borderStyle={this.props.borderStyle}
          borderRadius={this.props.borderRadius}
          height={this.props.height}
          width={this.props.width}
          transition={this.props.transition}
          demo={this.props.demo}
        />
      </div>
    );
  }

  public componentDidMount() {
    if (this.props.shouldSelfIncrement) {
      this.selfIncrementInterval();
    }

    // Listen to external datasource
    // this.listenTo(datasource, 'externalEventName', this.handleExternalUpdate);
  }

  public componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  public componentDidUpdate(prevProps: ProgressBarContainerProps, nextState: ProgressBarContainerState) {
    return nextState.progress !== this.state.progress;
  }

  private selfIncrementInterval() {
    let percent = this.state.progress;
    this.intervalId = setInterval(this.selfIncrement, this.props.selfIncrementInterval);
    
    if (percent >= 100) {
      this.setState({
        progress: 99
      });
    } else {
      this.setState({
        progress: percent
      });
    }
  }

  private selfIncrement = () => {
    let percent = this.state.progress;
    percent += Math.random() + 5 - Math.random();
    percent = percent < 99 ? percent : 100;

    this.setState({
      progress: percent
    });
  }

  private onIncrementClick = () => {
    this.setState(nextState => ({
      progress: Math.min(Math.max(this.state.progress + 20, 1), 100)
    }));
  }

  private onDecrementClick = () => {
    this.setState(nextState => ({
      progress: Math.min(Math.max(this.state.progress - 20, 1), 100)
    }));
  }

  // 
  /* private handleExternalUpdate = (response) => {
    this.setState({
      progress: response
    });
  } */
}
