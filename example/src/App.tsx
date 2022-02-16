import React, { useState } from 'react';
import { OneSlider, TwoSliders } from 'react-range-slider-ts';
import 'react-range-slider-ts/dist/index.css';
//

//
const range = (
    <div
        style={{
            height: '100%',
            backgroundColor: 'white'
        }}
    ></div>
);

const active_range = (
    <div
        style={{
            height: '100%',
            backgroundColor: 'blue'
        }}
    ></div>
);

const slider = (
    <div
        style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',

            cursor: 'pointer'
        }}
    ></div>
);

//
const App = () => {
    //
    const [percent, setPercent] = useState(0);

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    // ------

    //
    function handleChange(new_percent: number) {
        setPercent(new_percent);
    }

    //
    function handleChangeSlider1(new_percent: number) {
        setValue1(new_percent);
    }

    //
    function handleChangeSlider2(new_percent: number) {
        setValue2(new_percent);
    }

    //
    return (
        <div
            className='App'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'black'
            }}
        >
            <div
                className='App_slider'
                style={{ width: '500px', height: '8px' }}
            >
                <OneSlider
                    range={range}
                    active_range={active_range}
                    slider={slider}
                    value={percent}
                    handleChange={handleChange}
                    //
                    only_drag_slider={false}
                />

                <div style={{ padding: '50px' }}></div>

                <div
                    className='App_slider'
                    style={{ width: '500px', height: '8px' }}
                >
                    <TwoSliders
                        range={range}
                        active_range={active_range}
                        slider_1={slider}
                        slider_2={slider}
                        //
                        value1={value1}
                        value2={value2}
                        handleChangeSlider1={handleChangeSlider1}
                        handleChangeSlider2={handleChangeSlider2}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
