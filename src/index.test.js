import React from 'react';
import { shallow, mount } from 'enzyme';
import { My80sH1 } from '.';

describe('My80sComponets', () => {
  describe('My80sH1', () => {
    it('is truthy', () => {
      expect(My80sH1).toBeTruthy();
    });
    it('should render without crashing', () => {
      shallow(<My80sH1 />);
    });
    it('should take as an argument, and display, a single text prop', () => {
      let wrapper = mount(<My80sH1 text='test' />);
      console.log('props', wrapper.props().text);
      expect(wrapper.props().text).toEqual('test');
    });
  });
});
