import { assert } from 'chai'
import { generatePermutation } from '@/modules/permutation/permutation'

describe('順列', () => {
    it('順列', () => {
        const expect = [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]
        const actual = generatePermutation(3)
        assert.deepEqual(expect, actual)
    })
})
