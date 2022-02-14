import React, { useRef } from 'react';
import { common_types } from 'react-commons-ts';
//
import { useOneSlider } from '../../../hooks/useOneSlider';
//
import OneSliderElm, { OneSliderElmProps } from '../elm/OneSliderElm';

//
interface OneSliderProps {
    range?: OneSliderElmProps['range'];
    active_range?: OneSliderElmProps['active_range'];
    slider?: OneSliderElmProps['slider'];
    value: OneSliderElmProps['value'];

    only_drag_slider?: OneSliderElmProps['only_drag_slider'];

    ref_has_change_range?: common_types.UseRefType<boolean>;
    getRangeAngel?: () => number;

    callbackStart?: () => void;
    handleChange: (new_percent: number) => void;

    afterMouseDown?: () => void;
    afterMousemove?: () => void;
    afterMouseUp?: () => void;
}

//
function OneSlider({
    range,
    active_range,
    slider,
    value,

    only_drag_slider,
    ref_has_change_range = { current: false },
    getRangeAngel,

    // callbackStart = () => {},
    handleChange,

    afterMouseDown = () => {},
    afterMousemove = () => {},
    afterMouseUp = () => {}
}: OneSliderProps) {
    //
    const ref_range_elm = useRef<HTMLDivElement>(null);

    //
    const { ref_is_run, onDown, handleClick } = useOneSlider({
        ref_range_elm: ref_range_elm,
        ref_has_change_range: ref_has_change_range,

        getRangeAngel: getRangeAngel,
        handleChange: handleChange,

        afterMouseDown: afterMouseDown,
        afterMousemove: afterMousemove,
        afterMouseUp: afterMouseUp
    });

    // -----

    //
    const _handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        handleClick(e.nativeEvent);
    };

    //
    const _onDown: common_types.ReactMouseTouchFuncType = (e) => {
        onDown(e.nativeEvent);
    };

    //
    return (
        <OneSliderElm
            ref_range_elm={ref_range_elm}
            is_run={ref_is_run.current}
            only_drag_slider={only_drag_slider}
            //
            range={range}
            active_range={active_range}
            slider={slider}
            value={value}
            //
            handleClick={_handleClick}
            handleStart={_onDown}
        />
    );
}

export default OneSlider;
