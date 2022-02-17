# react-range-slider-ts

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-range-slider-ts.svg)](https://www.npmjs.com/package/react-range-slider-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-range-slider-ts
```

## Usage

```tsx
import React, { useRef, useState } from 'react';
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

    //
    const [, setForceUpDate] = useState(false);

    //
    const ref_slider_num_run = useRef(-1);
    const ref_is_run = useRef(false);

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
    function afterMouseUp() {
        setForceUpDate((force_update) => !force_update);
    }

    //
    function handleReset() {
        setValue1(0);
        setValue2(100);
    }

    //
    return (
        <div
            className='App'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                minHeight: '100vh',
                padding: '20px',
                backgroundColor: 'black',

                boxSizing: 'border-box'
            }}
        >
            <div>
                <div
                    style={{
                        marginBottom: '10px',
                        fontSize: '17px',
                        fontWeight: 500,
                        color: 'white'
                    }}
                >
                    Slider is running: {ref_is_run.current ? 'True' : 'False'}
                </div>

                <div
                    className='App_slider'
                    style={{ width: '500px', maxWidth: '95vw' }}
                >
                    <div style={{ height: '8px' }}>
                        <OneSlider
                            range={range}
                            active_range={active_range}
                            slider={slider}
                            value={percent}
                            //
                            only_drag_slider={false}
                            ref_is_run={ref_is_run}
                            //
                            handleChange={handleChange}
                            afterMouseUp={afterMouseUp}
                        />
                    </div>

                    <div style={{ padding: '50px' }}></div>

                    <div
                        style={{
                            marginBottom: '10px',
                            fontSize: '17px',
                            fontWeight: 500,
                            color: 'white'
                        }}
                    >
                        <div>Slider: {ref_slider_num_run.current}.</div>

                        <div>Slider1 = {Math.round(value1)}.</div>

                        <div>Slider2 = {Math.round(value2)}</div>

                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={handleReset}
                        >
                            Reset
                        </div>
                    </div>

                    <div
                        className='App_slider'
                        style={{
                            width: '500px',
                            maxWidth: '95vw',
                            height: '8px'
                        }}
                    >
                        <TwoSliders
                            range={range}
                            active_range={active_range}
                            slider1={slider}
                            slider2={slider}
                            //
                            ref_slider_num_run={ref_slider_num_run}
                            value1={value1}
                            value2={value2}
                            //
                            handleChangeSlider1={handleChangeSlider1}
                            handleChangeSlider2={handleChangeSlider2}
                            //
                            afterMouseUp={afterMouseUp}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
```

## License

MIT © [vandat9xhn](https://github.com/vandat9xhn)
