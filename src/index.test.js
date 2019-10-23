import React from 'react';
import { shallow, mount } from 'enzyme';
import { My80sH1, My80sPText, My80sAccCreateModal } from '.';

describe('My80sComponets', () => {
  describe('My80sH1', () => {
    it('should be truthy', () => {
      expect(My80sH1).toBeTruthy();
    });
    it('should render without crashing', () => {
      shallow(<My80sH1 />);
    });
    it('should take as an argument, and display, a single text prop', () => {
      let wrapper = mount(<My80sH1 text='h1Test' />);
      expect(wrapper.props().text).toEqual('h1Test');
    });
  });

  describe('My80sPText', () => {
    it('should be truthy', () => {
      expect(My80sPText).toBeTruthy();
    });
    it('should render without crashing', () => {
      shallow(<My80sPText />);
    });
    it('should take as an argument, and display, a single text prop', () => {
      let wrapper = mount(<My80sPText text='pTest' />);
      expect(wrapper.props().text).toEqual('pTest');
    });
  });

  describe('My80sAccCreateModal', () => {
    it('should be truthy', () => {
      expect(My80sAccCreateModal).toBeTruthy();
    });
    it('should render without crashing', () => {
      shallow(<My80sAccCreateModal />);
    })
  });
});
