let row: number
let col: number

export function countLake(garden: string[][]): number {
    let count = 0
    row = garden.length
    col = garden[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (garden[i][j] === 'W') {
                count++
                recursion(garden, i, j)
            }
        }
    }
    return count
}

function recursion(garden: string[][], curI: number, curJ: number) {
    garden[curI][curJ] = '.'
    for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
            const i = curI + di
            const j = curJ + dj
            if (0 <= i && i < row && 0 <= j && j < col && garden[i][j] === 'W') {
                recursion(garden, i, j)
            }
        }
    }
}
