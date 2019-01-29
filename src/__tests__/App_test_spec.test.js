import {shallow,mount,render} from 'enzyme'
import App from '../App';
import React from 'react';
import Tasklist from '../Tasklist';
import Task from '../Task';

describe('basic render', ()=>{
    it('does a thing', () =>{
        const wrapper = shallow(<App />);
        // console.log(wrapper.debug()); // shows a simple dom
        expect(wrapper).toMatchSnapshot();
    })
    
    it('works correctly',()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find(Tasklist).length).toBe(1);
    })

    it('has tasks', () => {
        const wrapper = mount(<App />);
        // console.log(wrapper.debug()); // shows a complex, fully rendered dom
        expect(wrapper.find(Task).length).toBe(3);
        wrapper.unmount();
    })
})

describe('rendering on tasks', ()=>{
    it('should render tasks', () => {
        const tasks = ['do the dishes', 'mow the lawn', 'test react components']
        const wrapper = shallow(<Tasklist list={tasks}/>);
        console.log(wrapper.debug()); // shows 3 Tasks in a row
        expect(wrapper.find(Task).length).toBe(3);
    })

    it('should deep render', () => {
        const tasks = ['do the delicious', 'mow the lawn', 'test react components']
        const wrapper = mount(<Tasklist list={tasks} />);
        console.log(wrapper.debug()); // shows rendered tasklist tree from above
        expect(wrapper.find(Task).length).toBe(3);
        expect(wrapper.find(Task).first().contains('do the delicious'));
        expect(wrapper.find(Task).at(1).contains('mow the lawn')).toBe(true);
        expect(wrapper.find(Task).at(2).contains('test react components'))
    })
  
})

