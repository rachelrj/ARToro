import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

describe('App ', () => {
    configure({adapter: new Adapter()});
    it('Renders app without crashing', () => {shallow( < App / >);});
});