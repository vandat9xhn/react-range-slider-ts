import { useEffect, useRef } from 'react';
import { common_types } from 'react-commons-ts';
//
import { useOneSlider } from './useOneSlider';

//
interface useTwoSliderProps {
    ref_range_elm: common_types.RefElmType<HTMLDivElement>;
    ref_has_change_range?: common_types.UseRefType<boolean>;
    ref_slider_num_run?: common_types.UseRefType<number>;

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
export function useTwoSlider({
    ref_range_elm,
    ref_has_change_range = { current: false },
    ref_slider_num_run = { current: -1 },

    value1,
    value2,

    getRangeAngel = () => 0,
    handleChangeSlider1 = () => {},
    handleChangeSlider2 = () => {},

    afterMouseDown = () => {},
    afterMousemove = () => {},
    afterMouseUp = () => {}
}: useTwoSliderProps) {
    //
    const ref_value1 = useRef(value1);
    const ref_value2 = useRef(value2);

    //
    const { onDown } = useOneSlider({
        ref_range_elm: ref_range_elm,
        ref_has_change_range: ref_has_change_range,
        handleChange: handleChange,
        getRangeAngel: getRangeAngel,

        afterMouseDown: _afterMouseDown,
        afterMouseUp: _afterMouseUp,
        afterMousemove: afterMousemove
    });

    //
    useEffect(() => {
        if (ref_slider_num_run.current == -1) {
            ref_value1.current = value1;
        }
    }, [value1]);

    //
    useEffect(() => {
        if (ref_slider_num_run.current == -1) {
            ref_value2.current = value2;
        }
    }, [value2]);

    // ----

    //
    function _afterMouseDown() {
        afterMouseDown();
    }

    //
    function _afterMouseUp() {
        ref_slider_num_run.current = -1;
        afterMouseUp();
    }

    //
    function handleChange(new_percent: number) {
        if (
            Math.abs(ref_value1.current - new_percent) <=
            Math.abs(ref_value2.current - new_percent)
        ) {
            ref_value1.current = new_percent;
            ref_slider_num_run.current = 1;
            handleChangeSlider1(new_percent);
        } else {
            ref_value2.current = new_percent;
            ref_slider_num_run.current = 2;
            handleChangeSlider2(new_percent);
        }
    }

    // ----

    return {
        onDown
    };
}
