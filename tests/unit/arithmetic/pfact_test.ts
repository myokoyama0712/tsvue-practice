import { assert } from 'chai'
import { trialDivision } from '@/modules/arithmetic/pfact'

describe('素数と素因数分解', () => {
    it('試し割りによる素因数分解', () => {
        const m = new Map<number, number>()
        m.set(2, 3)
        m.set(3, 2)
        m.set(5, 1)
        const fact = trialDivision(360)
        // assert.equal(m, trialDivision(360))
        // assert.strictEqual(m, trialDivision(360))
        for (let [key, value] of m) {
            let fact_value = number(fact.get(key))
            assert(value, fact_value)
        }
    })
})
