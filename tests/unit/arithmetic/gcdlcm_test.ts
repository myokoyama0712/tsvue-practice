import { assert } from 'chai'
import { gcd, lcm } from '@/modules/arithmetic/gcdlcm'

describe('最大公約数と最小公倍数のテスト', () => {
    it('gcd', () => {
        assert.equal(5, gcd(110, 35))
        assert.equal(40, gcd(80, 200))
        assert.equal(21, gcd(1029, 1071))
    })

    it('lcm', () => {
        assert.equal(210, lcm(30, 42))
        assert.equal(1, lcm(1, 1))
        assert.equal(6, lcm(2, 3))
        assert.equal(6, lcm(3, 2))
    })
})
