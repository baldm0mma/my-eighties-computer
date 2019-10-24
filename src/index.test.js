import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  My80sH1,
  My80sPText,
  My80sAccCreateModal,
  My80sAccLoginModal
} from '.';

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
    });
    it('should take 2 arguments', () => {
      let mockFunc = jest.fn();
      let wrapper = mount(
        <My80sAccCreateModal text='CModalTest' onSubmit={mockFunc} />
      );
      expect(wrapper.props().text).toEqual('CModalTest');
      expect(wrapper.props().onSubmit).toEqual(mockFunc);
    });
    it('should begin with an initial state of 3 key value pairs, all which have empty strings as default values', () => {
      let wrapper = shallow(<My80sAccCreateModal />);
      expect(wrapper.state().username).toEqual('');
      expect(wrapper.state().email).toEqual('');
      expect(wrapper.state().password).toEqual('');
    });
    it('should invoke the handleChange() function when input values are changed, and change state accordingly', () => {
      let wrapper = shallow(<My80sAccCreateModal />);
      wrapper
        .find('#username')
        .simulate('change', { target: { value: 'j', name: 'username' } });
      expect(wrapper.state().username).toEqual('j');
      wrapper
        .find('#email')
        .simulate('change', { target: { value: 'e', name: 'email' } });
      expect(wrapper.state().email).toEqual('e');
      wrapper
        .find('#password')
        .simulate('change', { target: { value: 'v', name: 'password' } });
      expect(wrapper.state().password).toEqual('v');
    });
    it('should invoke handleSubmit() when the button is clicked, and pass the current state as an argument', () => {
      let mockFunc = jest.fn();
      let wrapper = mount(<My80sAccCreateModal onSubmit={mockFunc} />);
      let newState = { username: 'jev', email: 'bev', password: 'kev' };
      wrapper.setState(newState);
      wrapper.find('#submit-button').simulate('click');
      expect(mockFunc).toHaveBeenCalled();
      expect(mockFunc).toHaveBeenCalledWith(newState);
    });
  });

  describe('My80sAccLoginModal', () => {
    it('should be truthy', () => {
      expect(My80sAccLoginModal).toBeTruthy();
    });
    it('should render without crashing', () => {
      shallow(<My80sAccLoginModal />);
    });
    it('should take 2 arguments', () => {
      let mockFunc = jest.fn();
      let wrapper = mount(
        <My80sAccLoginModal text='LModalTest' onSubmit={mockFunc} />
      );
      expect(wrapper.props().text).toEqual('LModalTest');
      expect(wrapper.props().onSubmit).toEqual(mockFunc);
    });
    
  });
});
