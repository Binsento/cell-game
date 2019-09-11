import React from 'react';


const Buttons = ({ text, down, up }) =>
    <div className='settings'>
        <button className = {'settings__button'} onClick={down}>-</button>
        <p className = {'settings__field'}>{text}</p>
        <button className = {'settings__button'} onClick={up}>+</button>
    </div>

export default Buttons