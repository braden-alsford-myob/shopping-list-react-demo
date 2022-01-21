import React from 'react';
import ItemAdder from "./ItemAdder";
import { shallow, mount } from 'enzyme';

describe('ItemAdder', () => {
    it('Should render an input and a button', () => {
        //Arrange
        const wrapper = shallow(<ItemAdder/>);
        //Act

        //Assert
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });
    it('should reset the input value on add', () => {
        //Arrange
        const wrapper = mount(<ItemAdder addItem={() => {}}/>)
        //Act
        const input = wrapper.find('input');
        input.simulate('focus');
        input.simulate('change', { target: { value: 'changed' } });
        input.simulate('blur');

        expect(input.instance().value).toBe('changed');

        const button = wrapper.find('button');
        button.simulate('click');
        //Assert
        expect(input.instance().value).toBe('');
    });
    it('should pass input value through to callback', () => {
        //Arrange
        const mockCallBack = jest.fn();
        const wrapper = mount(<ItemAdder addItem={mockCallBack}/>);

        //Act
        const input = wrapper.find('input');
        input.simulate('focus');
        input.simulate('change', { target: { value: 'changed' } });
        input.simulate('blur');

        const button = wrapper.find('button');
        button.simulate('click');

        //Assert
        expect(mockCallBack).toBeCalledWith('changed');
    });
});
