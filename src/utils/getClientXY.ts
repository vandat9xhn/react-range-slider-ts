import { common_types } from 'react-commons-ts';

//
export function getClientX(e: common_types.MouseTouchEventType) {
    return e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
}

//
export function getClientY(e: common_types.MouseTouchEventType) {
    return e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
}

//
export function getClientXY(e: common_types.MouseTouchEventType) {
    return e instanceof TouchEvent
        ? { client_x: e.touches[0].clientX, client_y: e.touches[0].clientY }
        : { client_x: e.clientX, client_y: e.clientY };
}

//
export function getTouchClientXY(e: TouchEvent, touche_ix: number) {
    return {
        client_x: e.touches[touche_ix].clientX,
        client_y: e.touches[touche_ix].clientY
    };
}
