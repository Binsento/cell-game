const getRandom = (max) => Math.floor(Math.random() * max)
const coordToOrder = (x, y, size) => (y * size + x % size)

const makeInstruction = (size, steps) => {
    let coordX = getRandom(size)
    let coordY = getRandom(size)
    let start = coordToOrder(coordX, coordY, size)
    let directions = []
    for (let i = 0; i < steps; i++) {
        let moves = [];
        if ((coordX + 1) < size) moves.push(0)
        if ((coordY + 1) < size) moves.push(90)
        if ((coordX - 1) >= 0) moves.push(180)
        if ((coordY - 1) >= 0) moves.push(270)
        let currentMove = getRandom(moves.length);
        directions.push(moves[currentMove])
        switch (moves[currentMove]) {
            case 0: {
                coordX++
                break
            }
            case 90: {
                coordY++
                break
            }
            case 180: {
                coordX--
                break
            }
            case 270: {
                coordY--
                break
            }
            default:
                throw new Error('Ошибка генерации хода')
        }
    }
    let end = coordToOrder(coordX, coordY, size);
    return {
        size,
        start,
        end,
        directions
    }
}

export default makeInstruction

