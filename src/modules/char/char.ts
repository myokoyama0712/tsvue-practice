export function toggleString(s: string): string {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        res += toggleChar(s.charAt(i))
    }
    return res
}

function toggleChar(s: string): string {
    const t = s.toUpperCase()
    if (s === t) {
        return s.toLowerCase()
    }
    return t
}
