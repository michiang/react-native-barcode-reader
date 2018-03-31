export const TAKE_PHOTO = 'TAKE_PHOTO';
export const ADD_UPC = 'ADD_UPC';
export const NO_UPC = 'NO_UPC';

export function takePhoto() {
    return {
        type: TAKE_PHOTO
    };
}

export function addUPC(upc) {
    if (upc) {
        return {
            type: ADD_UPC
        };
    } else {
        return {
            type: NO_UPC
        };
    }
}