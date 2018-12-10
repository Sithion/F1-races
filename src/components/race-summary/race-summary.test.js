import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RaceSummary from './race-summary';


test('must render correctly', (t) => {
    const wrapper = shallow(<RaceSummary />);
    t.snapshot(toJson(wrapper));
});

test('must list winners and highlight the season champion', (t) => {
    const wrapper = shallow(<RaceSummary
        winners={[
            { id: 'racer2', name: 'Racer 2', round: '1' },
            { id: 'racer3', name: 'Racer 3', round: '2' },
            { id: 'racer1', name: 'Racer 1', round: '3' },
        ]}
        champion="racer3"
    />);
    t.snapshot(toJson(wrapper));
});
