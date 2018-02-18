import * as React from 'react';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, ShallowWrapper } from 'enzyme';
import ProgressBarContainer, { ProgressBarContainerProps } from './progress-bar-container';

describe('ProgressBarContainer', () => {
  let component: ShallowWrapper<ProgressBarContainer, {}>;
  let onIncrementClickCallback: jest.Mock<void>;
  let onDecrementClickCallback: jest.Mock<void>;

  const getProps = (overrides?: Partial<ProgressBarContainerProps>) => {
    onIncrementClickCallback = jest.fn();
    onDecrementClickCallback = jest.fn();

    const defaultProps = {
      min: 100,
      max: 100,
      onIncrementClick: onIncrementClickCallback,
      onDecrementClick: onDecrementClickCallback,
      progress: 50,
      fillColor: '#ccc',
      height: 50,
      width: 400,
    };

    return {
      ...defaultProps,
      ...overrides,
    };
  };

  describe('when initialized', () => {
    let props: ProgressBarContainerProps;

    beforeEach(() => {
      props = getProps();
      component = shallow(<ProgressBarContainer {...props} />);
    });

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
