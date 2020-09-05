import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

initialState[STORETYPES[0]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/pig-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Nature',
    'img': '../img/nature-art.jpg',
    'size': '300x250',
    'status': 'Available for Purchase'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cow-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}];
initialState[STORETYPES[1]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/pig-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Nature',
    'img': '../img/nature-art.jpg',
    'size': '300x250',
    'status': 'Available for Purchase'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cow-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}];
initialState[STORETYPES[2]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/pig-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Nature',
    'img': '../img/nature-art.jpg',
    'size': '300x250',
    'status': 'Available for Purchase'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cow-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}];
initialState[STORETYPES[3]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/pig-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Nature',
    'img': '../img/nature-art.jpg',
    'size': '300x250',
    'status': 'Available for Purchase'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cow-art.jpg',
    'size': '300x250',
    'status': 'Sold'
}];

export default createStore(reducer, initialState);