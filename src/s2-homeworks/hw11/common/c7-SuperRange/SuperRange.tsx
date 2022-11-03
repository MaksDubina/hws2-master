import React from 'react'
import {Slider, SliderProps, SliderThumb} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {



    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                minWidth: '147px',
                 color: '#00CC22;',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                },
                '& .airbnb-bar': {
                    height: 9,
                    width: 1,
                    backgroundColor: 'currentColor',
                    marginLeft: 1,
                    marginRight: 1,
                },

            }}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
