import React from 'react'

const computeStyle = size => {
    let result = Math.floor(30 / size)-1
    return { flexBasis: `${result}vw`, height: `${result}vw` }
}


const Field = ( {instructions: {size, start, end}, click} ) => {
    const clickCell = event => click((event.target.id === 'end') ? 'Точно! Ещё разок?' : 'Мимо! Подумай ещё.')
    return (
        <ul className='field' onClick={clickCell}>
            {new Array(size*size).fill(0).map((elem, i) =>
                <li key={i} style={computeStyle(size)} className={(i !== start) ? 'cell' : 'cell_start'} id={(i === end) ? 'end' : ''}></li>
            )}
        </ul>
    )
}


export default Field