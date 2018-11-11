export function BoundedRandomInt(min: number, max: number): number {
    const delta = max - min
    const r = Math.floor(Math.random() * (delta + 1))
    return r + min
}

export function BoundedRandomFloat(min: number, max: number): number {
    const delta = max - min
    const r = Math.random() * delta
    return r + min
}
