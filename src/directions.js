import React from 'react'


const Directions = ({ directions }) =>
    <ul className='field-direction'>
        {directions.map((elem, i) =>
            <li key={i} className='direction' style={{ transform: `rotate(${elem}deg)` }}></li>
        )}
    </ul>

export default Directions