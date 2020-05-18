import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

test('renders without an error', () => {
  const wrapper = shallow(<App/>); // Checking if renderd without error
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1) // We are expecting there to be one node
})

test('renders increment button',  () => {
  const wrapper = shallow(<App/>); // Checking if renderd without error
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1) // We are expecting there to be one node
})

test('renders counter display', () => {
  const wrapper = shallow(<App/>); // Checking if renderd without error
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1) // We are expecting there to be one node
})

test('counter starts at 0', () => {
})

test('clicking button increments counter display', () => {
})

