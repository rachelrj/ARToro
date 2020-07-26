import {createStore} from "redux";
import reducer from './reducer';
import STORETYPES from './storeTypes';

let initialState = {};

initialState[STORETYPES[0]] = [
{
    'id': 1,
},
{
    'id': 2,
},{
    'id': 3,
}];

export default createStore(reducer, initialState);