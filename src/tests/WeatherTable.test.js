import React from 'react';
import {render} from '@testing-library/react';
import WeatherTable from '../Homepage';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import {default as config} from '../config';

// describe('WeatherTable ', () => {
//     configure({adapter: new Adapter()});

//     it('goes into error state when server returns an error response', done => {
//         jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject());

//         const wrapper = shallow(<WeatherTable/>);

//         expect(global.fetch).toHaveBeenCalledTimes(1);
//         expect(global.fetch).toHaveBeenCalledWith(config.BACKEND_SERVICE);
//         process.nextTick(() => {
//             expect(wrapper.state()).toEqual({
//                 "cities": [],
//                 "error": undefined,
//                 "isLoading": false,
//             });
//             global.fetch.mockClear();
//             done();
//         });
//     });
//     it('goes into loading state when server pending response', done => {
//         function promiseDelay() {
//             return new Promise(resolve => setTimeout(resolve, 1000));
//         }

//         jest.spyOn(global, 'fetch').mockImplementation(() => promiseDelay());

//         const wrapper = shallow(<WeatherTable/>);

//         expect(global.fetch).toHaveBeenCalledTimes(1);
//         expect(global.fetch).toHaveBeenCalledWith(config.BACKEND_SERVICE);
//         process.nextTick(() => {
//             expect(wrapper.state()).toEqual({
//                 "cities": [],
//                 "error": null,
//                 "isLoading": true,
//             });
//             global.fetch.mockClear();
//             done();
//         });
//     });
    
//     //TODO: Create sample Response stream to resolve with.
//     it.skip('goes into happy state when server success response', done => {
//         jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve("sample data"));

//         const wrapper = shallow(<WeatherTable/>);

//         expect(global.fetch).toHaveBeenCalledTimes(1);
//         expect(global.fetch).toHaveBeenCalledWith(config.BACKEND_SERVICE);
//         process.nextTick(() => {
//             expect(wrapper.state()).toEqual({
//                 "cities": "sample data",
//                 "error": null,
//                 "isLoading": false,
//             });
//             global.fetch.mockClear();
//             done();
//         });
//     });
// });