export function generatePermutation(n: number): number[][] {
    const interim: number[] = []
    const residual: number[] = []
    for (let i = 1; i <= n; i++) {
        residual.push(i)
    }
    return recursion(interim, residual)
}

function recursion(interim: number[], residual: number[]): number[][] {
    if (residual.length === 0) {
        return [interim]
    }

    const permutation: number[][] = []
    for (let i = 0; i < residual.length; i++) {
        const copiedInterim = interim.slice()
        const copiedResidual = deleteElement(residual, i)
        copiedInterim.push(residual[i])
        const p = recursion(copiedInterim, copiedResidual)
        permutation.push(...p)
    }
    return permutation
}

function deleteElement(arr: number[], i: number): number[] {
    const newArray: number[] = []
    for (let j = 0; j < arr.length; j++) {
        if (j === i) {
            continue
        }
        newArray.push(arr[j])
    }
    return newArray
}
