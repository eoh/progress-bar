import * as React from 'react';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, ShallowWrapper } from 'enzyme';
import ProgressBar from './progress-bar';
import { ProgressBarContainerProps } from './progress-bar-container';

describe('ProgressBar', () => {
  let component: ShallowWrapper<ProgressBarContainerProps, {}>;

  const getProps = (overrides?: Partial<ProgressBarContainerProps>) => {
    const defaultProps = {
      min: 20,
      max: 100,
      fillColor: '#aaa',
      bgColor: '#aaa',
      height: 50,
      width: 400,
      borderRadius: 20,
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
      component = shallow(<ProgressBar {...props} />);
    });

    it('matches snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
