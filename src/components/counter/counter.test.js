/* globals shallow, mount, render */
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './counter';

describe('Counter Component', () => {
    it('matches snapshot without props', () => {
      const tree = renderer.create(<Counter />).toJSON()
      expect(tree).toMatchSnapshot();
    });

    it('can shallowly render without props', () => {
      let counter = shallow(<Counter />);
      expect(counter.find('section').exists()).toBe(true);
      expect(counter.find('span').exists()).toBe(true);
      expect(counter.find('a').exists()).toBe(true);
    });

    it('can simulate button up and down presses', () => {
      let counter = mount(<Counter />);
      let buttonUp = counter.find('.up');
      let buttonDown = counter.find('.down');
      expect(counter.state('count')).toBe(0);
      buttonUp.simulate('click')
      expect(counter.state('count')).toBe(1);
      buttonUp.simulate('click')
      expect(counter.state('count')).toBe(2);
      buttonUp.simulate('click')
      expect(counter.state('count')).toBe(3);
      buttonDown.simulate('click')
      expect(counter.state('count')).toBe(2);
      buttonDown.simulate('click')
      expect(counter.state('count')).toBe(1);
      buttonDown.simulate('click')
      expect(counter.state('count')).toBe(0);
    });

});
