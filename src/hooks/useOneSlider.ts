import { useRef } from 'react';
import {
    common_types,
    //
    useForceUpdate,
    useMouseDownToWindowUp
} from 'react-commons-ts';
//
import { getClientXY } from '../utils/getClientXY';
import { getSliderPercent } from '../utils/getSliderValue';
import { refGetBoundingClientRect } from '../utils/refGetBoundingClientRect';
//

//
interface useOneSliderProps {
    ref_range_elm: common_types.RefElmType<HTMLDivElement>;
    ref_has_change_range: common_types.UseRefType<boolean>;

    getRangeAngel?: () => number;
    handleChange: (value: number) => void;

    afterMouseDown?: () => void;
    afterMousemove?: () => void;
    afterMouseUp?: () => void;
}

//
export function useOneSlider({
    ref_range_elm = { current: null },
    ref_has_change_range = { current: false },

    getRangeAngel = () => 0,
    handleChange = () => {},

    afterMouseDown = () => {},
    afterMousemove = () => {},
    afterMouseUp = () => {}
}: useOneSliderProps) {
    //
    const ref_is_run = useRef(false);

    const ref_range_obj = useRef({
        range_angel: 0,
        x_range_start: 0,
        y_range_start: 0,
        x_range_end: 0,
        y_range_end: 0
    });

    //
    const forceUpdate = useForceUpdate();

    //
    const { onDown } = useMouseDownToWindowUp({
        handleDown: onMouseDown,
        handleMove: onMouseMove,
        handleEnd: onMouseEnd
    });

    // -----

    //
    function changeRangeObj() {
        if (ref_has_change_range.current) {
            return;
        }

        ref_has_change_range.current = true;

        const { top, left, right, bottom } =
            refGetBoundingClientRect(ref_range_elm);

        const new_range_angel = getRangeAngel();

        if (new_range_angel == 0) {
            ref_range_obj.current = {
                ...ref_range_obj.current,
                range_angel: 0,
                x_range_start: left,
                x_range_end: right
            };
        }
        //
        else if (new_range_angel == -90) {
            ref_range_obj.current = {
                ...ref_range_obj.current,
                range_angel: 90,
                y_range_start: bottom,
                y_range_end: top
            };
        }
    }

    //
    function onChange({
        clientX,
        clientY
    }: {
        clientX: number;
        clientY: number;
    }) {
        const new_percent = getSliderPercent({
            ...ref_range_obj.current,
            clientX: clientX,
            clientY: clientY
        });

        handleChange(new_percent * 100);
    }

    //
    function onMouseDown(e: common_types.MouseTouchEventType) {
        if (!ref_has_change_range.current) {
            changeRangeObj();
        }

        const { client_x, client_y } = getClientXY(e);
        onChange({ clientX: client_x, clientY: client_y });
        ref_is_run.current = true;
        forceUpdate();

        afterMouseDown();
    }

    //
    function onMouseMove(e: common_types.MouseTouchEventType) {
        if (ref_is_run.current) {
            const { client_x, client_y } = getClientXY(e);
            onChange({ clientX: client_x, clientY: client_y });

            afterMousemove();
        }
    }

    //
    function onMouseEnd() {
        ref_is_run.current = false;
        forceUpdate();

        afterMouseUp();
    }

    //
    function handleClick(e: MouseEvent) {
        if (!ref_has_change_range.current) {
            changeRangeObj();
        }

        onChange({ clientX: e.clientX, clientY: e.clientY });
    }

    // ----

    return {
        ref_is_run,
        ref_range_obj,

        onDown,
        handleClick
    };
}
