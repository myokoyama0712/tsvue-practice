let goalSum: number
let nums: number[]
let height: number

export function partialSum(goalSumArg: number, numsArg: number[]): boolean {
    goalSum = goalSumArg
    nums = numsArg
    height = numsArg.length

    return recursion(0, 0)
}

function recursion(i: number, sum: number): boolean {
    if (i === height) {
        return sum === goalSum
    }

    if (recursion(i + 1, sum + nums[i])) {
        return true
    }
    if (recursion(i + 1, sum)) {
        return true
    }

    return false
}
