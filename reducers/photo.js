import { TAKE_PHOTO } from '../actions/';

let cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}

let newState = {};

export default function (state, action) {
    switch (action.type) {
        case TAKE_PHOTO:
            newState = cloneObject(state);
            newState.photo.content = newState.action;
            return newState;
        default:
            return state || newState;
    }
}