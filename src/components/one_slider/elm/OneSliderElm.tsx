import React from 'react';
import { common_types, common_constant } from 'react-commons-ts';
// 
import { getClassModuleCss } from '../../../utils/getClassModuleCss';
//
import OneSliderElmStyles from './OneSliderElm.scss';

//
function _getClassModuleCss(className = '') {
    return getClassModuleCss(className, OneSliderElmStyles);
}

//
export interface OneSliderElmProps {
    ref_range_elm: common_types.RefElmType<HTMLDivElement>;
    is_run: boolean;

    only_drag_slider?: boolean;

    range?: React.ReactElement;
    active_range?: React.ReactElement;
    slider?: React.ReactElement;
    value: number;

    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleStart: common_types.ReactMouseTouchFuncType;
}

//
function OneSliderElm({
    ref_range_elm,
    is_run,
    only_drag_slider = false,

    range,
    active_range,
    slider,
    value,

    handleClick,
    handleStart
}: OneSliderElmProps) {
    //
    return (
        <div
            ref={ref_range_elm}
            className={`${_getClassModuleCss('OneSliderElm')} ${
                is_run ? 'input-range-running' : ''
            }`}
            onMouseDown={
                !only_drag_slider && !common_constant.IS_MOBILE
                    ? handleStart
                    : undefined
            }
            onTouchStart={
                !only_drag_slider && common_constant.IS_MOBILE
                    ? handleStart
                    : undefined
            }
        >
            <div
                className={_getClassModuleCss('OneSliderElm_range')}
                onClick={handleClick}
            >
                {range}
            </div>

            <div
                className={_getClassModuleCss('OneSliderElm_range_active')}
                style={{ width: `${value}%` }}
            >
                {active_range}
            </div>

            <div
                className={_getClassModuleCss('OneSliderElm_slider')}
                style={{ left: `${value}%` }}
                //
                onMouseDown={
                    only_drag_slider && !common_constant.IS_MOBILE
                        ? handleStart
                        : undefined
                }
                onTouchStart={
                    only_drag_slider && common_constant.IS_MOBILE
                        ? handleStart
                        : undefined
                }
            >
                {slider}
            </div>
        </div>
    );
}

export default OneSliderElm;
