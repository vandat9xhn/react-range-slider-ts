import React, { useState } from 'react';
import { OneSlider } from 'react-range-slider-ts';
import 'react-range-slider-ts/dist/index.css';
//

//
const App = () => {
    //
    const [percent, setPercent] = useState(0);

    //
    function handleChange(new_percent: number) {
        setPercent(new_percent);
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
                    range={
                        <div
                            style={{
                                height: '100%',
                                backgroundColor: 'white'
                            }}
                        ></div>
                    }
                    active_range={
                        <div
                            style={{
                                height: '100%',
                                backgroundColor: 'blue'
                            }}
                        ></div>
                    }
                    slider={
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
                    }
                    value={percent}
                    handleChange={handleChange}
					// 
					only_drag_slider={true}
                />
            </div>
        </div>
    );
};

export default App;
