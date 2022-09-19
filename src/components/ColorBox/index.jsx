import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {
    
};

function getRamDomColor() {
    const colorList = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const ramDomIndex = Math.trunc(Math.random() * 5);// trunc lấy phần nguyên
    return colorList[ramDomIndex]
}

function ColorBox() {
    const [color, setColor] = useState(()=>{
        const initColor =  localStorage.getItem('box_color') || 'deepink'
        return initColor
    });

    function handleClick() {
        //get ramdomcolor --> setColor
        const newColor = getRamDomColor()
        setColor(newColor)

        localStorage.setItem('box_color', newColor)// LƯU TRỮ LẠI GIÁ TRị VAFON DEV TOOLS ĐỂ XEM
    }

    return (
        <div 
            className='colorBox' 
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
            Color box
        </div>
    );
}

export default ColorBox;