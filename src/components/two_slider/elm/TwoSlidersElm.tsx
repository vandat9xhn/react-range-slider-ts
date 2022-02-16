import React from 'react';
import { common_constant, common_types } from 'react-commons-ts';
//
import { getClassModuleCss } from '../../../utils/getClassModuleCss';
//
import TwoSlidersElmStyles from './TwoSlidersElm.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss(className, TwoSlidersElmStyles);
}

//
interface TwoSlidersElmProps {
    ref_range_elm: common_types.RefElmType<HTMLDivElement>;
    slider_num: number;

    range: React.ReactElement;
    active_range: React.ReactElement;
    slider_1: React.ReactElement;
    slider_2: React.ReactElement;
    value1: number;
    value2: number;

    handleMouseDown: (
        e: common_types.ReactMouseTouchEventType<HTMLDivElement>
    ) => void;
}

//
function TwoSlidersElm({
    ref_range_elm,
    slider_num,

    range,
    active_range,
    slider_1,
    slider_2,
    value1,
    value2,

    handleMouseDown
}: TwoSlidersElmProps) {
    //
    return (
        <div
            ref={ref_range_elm}
            className={`${_getClassModuleCss(
                'TwoSlidersElm'
            )} ${_getClassModuleCss(
                slider_num == 1
                    ? 'TwoSlidersElm-1-run'
                    : slider_num == 2
                    ? 'TwoSlidersElm-2-run'
                    : 'TwoSlidersElm-not-run'
            )}`}
            onMouseDown={
                common_constant.IS_MOBILE ? undefined : handleMouseDown
            }
            onTouchStart={
                common_constant.IS_MOBILE ? handleMouseDown : undefined
            }
        >
            <div className={_getClassModuleCss('TwoSlidersElm_range')}>
                {range}
            </div>

            <div
                className={_getClassModuleCss('TwoSlidersElm_range_active')}
                style={{ left: `${value1}%`, width: `${value2 - value1}%` }}
            >
                {active_range}
            </div>

            <div
                className={_getClassModuleCss('TwoSlidersElm_slider')}
                style={{ left: `${value1}%` }}
            >
                {slider_1}
            </div>

            <div
                className={_getClassModuleCss('TwoSlidersElm_slider')}
                style={{ left: `${value2}%` }}
            >
                {slider_2}
            </div>
        </div>
    );
}

export default TwoSlidersElm;
