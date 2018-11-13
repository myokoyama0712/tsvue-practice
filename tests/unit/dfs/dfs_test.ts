import { assert } from 'chai'
import { partialSum } from '@/modules/dfs/dfs'

describe('深さ優先探索', () => {
    it('部分和問題', () => {
        assert.isTrue(partialSum(13, [1, 2, 4, 7]))
        assert.isFalse(partialSum(15, [1, 2, 4, 7]))
    })
})
