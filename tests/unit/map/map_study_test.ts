import { assert } from 'chai'

describe('ES6のMapオブジェクトの学習', () => {
    it('基本', () => {
        const m = new Map<number, number>()
        m.set(2, 3)
        m.set(3, 2)
        m.set(5, 1)
        assert.equal(3, m.get(2))
        assert.equal(2, m.get(3))
        assert.equal(1, m.get(5))
    })
})
