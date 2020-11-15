import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

// Commisions = 0
// Watercolor = 1
// Oil = 2
// Miscellaneous = 3

initialState[STORETYPES[0]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/ziggy-the-piggy-oil-painting.jpg',
    'size': '8x10 Oval Canvas',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Landscape',
    'img': '../img/oil-painting-1.jpg',
    'size': '18x24 Inches',
    'status': 'Sold'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cinnamon-oil-painting.jpg',
    'size': '',
    'status': 'Sold'
},{
    'id': 4,
    'title': 'Leather Painting',
    'img': '../img/leather-painting.jpg',
    'size': '',
    'status': 'Sold'
}, {
    'id': 5,
    'title': "Long's peak from Longmont",
    'img': '../img/watercolor-1.jpg',
    'size': '',
    'status': 'Sold'
}];
initialState[STORETYPES[1]] = [{
    'id': 1,
    'title': 'Brainless Lake',
    'img': '../img/watercolor-donation.jpg',
    'size': 'Donation to Plenty of',
    'status': 'Pitbulls Auction'
}, {
    'id': 2,
    'title': "Long's peak from Longmont",
    'img': '../img/watercolor-1.jpg',
    'size': '',
    'status': 'Sold'
}];
initialState[STORETYPES[2]] = [{
    'id': 1,
    'title': 'Ziggy the Piggy',
    'img': '../img/ziggy-the-piggy-oil-painting.jpg',
    'size': '8x10 Oval Canvas',
    'status': 'Sold'
}, {
    'id': 2,
    'title': 'Landscape',
    'img': '../img/oil-painting-1.jpg',
    'size': '',
    'status': 'Sold'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cinnamon-oil-painting.jpg',
    'size': '',
    'status': 'Sold'
}];
initialState[STORETYPES[3]] = [{
    'id': 1,
    'title': 'Leather Painting',
    'img': '../img/leather-painting.jpg',
    'size': '',
    'status': 'Sold'
}];

export default createStore(reducer, initialState);