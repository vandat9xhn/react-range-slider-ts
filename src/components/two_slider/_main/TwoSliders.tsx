import React, { useRef } from 'react';
import { common_types } from 'react-commons-ts';
//
import { useTwoSlider } from '../../../hooks/useTwoSlider';
//
import TwoSlidersElm from '../elm/TwoSlidersElm';

//
interface TwoSlidersProps {
    range: React.ReactElement;
    active_range: React.ReactElement;
    slider_1: React.ReactElement;
    slider_2: React.ReactElement;
    value1: number;
    value2: number;

    getRangeAngel?: () => number;
    handleChangeSlider1: (new_percent: number) => void;
    handleChangeSlider2: (new_percent: number) => void;

    afterMouseDown?: () => void;
    afterMousemove?: () => void;
    afterMouseUp?: () => void;
}

//
function TwoSliders({
    range,
    active_range,
    slider_1,
    slider_2,
    value1,
    value2,

    getRangeAngel,

    handleChangeSlider1,
    handleChangeSlider2,

    afterMouseDown,
    afterMousemove,
    afterMouseUp
}: TwoSlidersProps) {
    //
    const ref_range_elm = useRef<HTMLDivElement>(null);
    const ref_has_change_range = useRef(false);

    //
    const { onDown, ref_slider_num_run } = useTwoSlider({
        ref_range_elm: ref_range_elm,
        ref_has_change_range: ref_has_change_range,
        value1: value1,
        value2: value2,
        //
        getRangeAngel: getRangeAngel,
        handleChangeSlider1: handleChangeSlider1,
        handleChangeSlider2: handleChangeSlider2,
        //
        afterMouseDown: afterMouseDown,
        afterMousemove: afterMousemove,
        afterMouseUp: afterMouseUp
    });

    // ---

    //
    function handleMouseDown(
        e: common_types.ReactMouseTouchEventType<HTMLDivElement>
    ) {
        onDown(e.nativeEvent);
    }

    //
    return (
        <TwoSlidersElm
            ref_range_elm={ref_range_elm}
            slider_num={ref_slider_num_run.current}
            range={range}
            active_range={active_range}
            slider_1={slider_1}
            slider_2={slider_2}
            value1={value1}
            value2={value2}
            handleMouseDown={handleMouseDown}
        />
    );
}

export default TwoSliders;
