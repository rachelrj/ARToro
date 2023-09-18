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
    'title': 'Mocha',
    'img': '../img/Mocha.png',
    'size': '8”x10” Oval',
    'status': 'Sold'
},{
    'id': 2,
    'title': 'Landscape',
    'img': '../img/oil-painting-1.png',
    'size': '18x24 Inches',
    'status': 'Sold'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cinnamon.jpg',
    'size': '18x24 Inches',
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
    'img': '../img/watercolor-painting-2.png',
    'size': '',
    'status': 'Sold'
}, {
    'id': 6,
    'title': "Juan Deer",
    'img': '../img/juan-deer.jpg',
    'size': '24x24 Inches',
    'status': 'Sold'
},{
    'id': 7,
    'title': "Tally and Landis",
    'img': '../img/tally_landis.jpg',
    'size': '12x16 Inches',
    'status': 'Sold'
}];
initialState[STORETYPES[1]] = [{
    'id': 2,
    'title': 'Brainard Lake',
    'img': '../img/watercolor-donation.jpg',
    'size': 'Donation to Plenty of',
    'status': 'Pitbulls Auction'
},{
    'id': 3,
    'title': 'Elk Mountain',
    'img': '../img/watercolor-1.jpg',
    'size': '8x10',
    'status': 'Sold'
},{
    'id': 3,
    'title': 'Waterlogged',
    'img': '../img/watercolor-painting-3.png',
    'size': '6x12',
    'status': 'Sold'
},{
    'id': 1,
    'title': "Long's peak from Longmont",
    'img': '../img/watercolor-painting-2.jpg',
    'size': '',
    'status': 'Sold'
}];
initialState[STORETYPES[2]] = [{
    'id': 2,
    'title': 'Landscape',
    'img': '../img/oil-painting-1.jpg',
    'size': '18x24',
    'status': 'Sold'
},{
    'id': 1,
    'title': 'Mocha',
    'img': '../img/Mocha.png',
    'size': '8”x10” Oval',
    'status': 'Sold'
},{
    'id': 3,
    'title': 'Cinnamon',
    'img': '../img/cinnamon.jpg',
    'size': '18x24 Inches',
    'status': 'Sold'
}, {
    'id': 4,
    'title': "Juan Deer",
    'img': '../img/juan-deer.jpg',
    'size': '24x24 Inches',
    'status': 'Sold'
},{
    'id': 5,
    'title': "Tally and Landis",
    'img': '../img/tally_landis.jpg',
    'size': '12x16 Inches',
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