export function trialDivision(n: number): Map<number, number> {
    if (n <= 0) {
        throw new Error('[argument error]: trialDivision only accepts a NATURAL number')
    }

    const newMap = new Map<number, number>()

    if (n === 1) {
        newMap.set(1, 1)
        return newMap
    }

    const sqrt = Math.pow(n, 0.5)
    for (let i = 2; i <= sqrt; i++) {
        let exp = 0
        while (n % i === 0) {
            exp++
            n /= i
        }
        if (exp === 0) {
            continue
        }
        newMap.set(i, exp)
    }
    if (n > 1) {
        newMap.set(n, 1)
    }

    return newMap
}
