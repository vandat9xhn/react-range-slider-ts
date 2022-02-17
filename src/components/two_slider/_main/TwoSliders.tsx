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
    slider1: React.ReactElement;
    slider2: React.ReactElement;
    value1: number;
    value2: number;

    ref_slider_num_run?: common_types.UseRefType<number>;
    ref_has_change_range?: common_types.UseRefType<boolean>;

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
    slider1,
    slider2,

    ref_slider_num_run = { current: -1 },
    ref_has_change_range = { current: false },
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

    //
    const { onDown } = useTwoSlider({
        ref_range_elm: ref_range_elm,
        ref_has_change_range: ref_has_change_range,
        ref_slider_num_run: ref_slider_num_run,
        //
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
            slider1={slider1}
            slider2={slider2}
            value1={value1}
            value2={value2}
            handleMouseDown={handleMouseDown}
        />
    );
}

export default TwoSliders;
