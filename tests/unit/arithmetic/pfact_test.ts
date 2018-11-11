import { assert } from 'chai'
import { trialDivision } from '@/modules/arithmetic/pfact'

describe('素数と素因数分解', () => {
    it('試し割りによる素因数分解', () => {
        // 360の素因数分解
        let m = new Map<number, number>()
        m.set(2, 3)
        m.set(3, 2)
        m.set(5, 1)
        let fact = trialDivision(360)
        for (const [key, value] of m) {
            const tmp = fact.get(key)
            let factValue = 0
            if (typeof tmp === 'number') {
                factValue = tmp
                assert.equal(value, factValue)
            }
        }
        // その他
        m = new Map<number, number>()
        m.set(1, 1)
        fact = trialDivision(1)
        for (const [key, value] of m) {
            const tmp = fact.get(key)
            let factValue = 0
            if (typeof tmp === 'number') {
                factValue = tmp
                assert.equal(value, factValue)
            }
        }
        m = new Map<number, number>()
        m.set(13, 1)
        fact = trialDivision(13)
        for (const [key, value] of m) {
            const tmp = fact.get(key)
            let factValue = 0
            if (typeof tmp === 'number') {
                factValue = tmp
                assert.equal(value, factValue)
            }
        }
        m = new Map<number, number>()
        m.set(2, 1)
        m.set(13, 1)
        fact = trialDivision(26)
        for (const [key, value] of m) {
            const tmp = fact.get(key)
            let factValue = 0
            if (typeof tmp === 'number') {
                factValue = tmp
                assert.equal(value, factValue)
            }
        }
    })
})
