import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import SeasonPicker from './season-picker';


test('must render correctly', (t) => {
    const wrapper = shallow(<SeasonPicker />);
    t.snapshot(toJson(wrapper));
});

test('must be able to custom the start and end years by props', (t) => {
    const wrapper = shallow(<SeasonPicker startYear={1990} endYear={2000} />);
    t.snapshot(toJson(wrapper));
});

test('must be able to set the selected year', (t) => {
    const wrapper = shallow(<SeasonPicker selectedYear={2010} />);
    t.snapshot(toJson(wrapper));
});

test('must trigger event prop \'onSelectYear\' when click in a item', (t) => {
    const onSelectYearMock = sinon.fake();
    const wrapper = shallow(<SeasonPicker
        startYear={2000}
        onSelectYear={onSelectYearMock}
    />);
    wrapper.find('button').at(0).simulate('click');
    t.truthy(onSelectYearMock.calledOnce);
    t.is(onSelectYearMock.lastArg, 2000);
});
