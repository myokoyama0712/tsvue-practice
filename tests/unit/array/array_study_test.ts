import { assert } from 'chai'

describe('配列操作の学習', () => {
    it('配列長のチェック - .length', () => {
        const testArray = ['a', 'b', 'c', 'd']
        assert.equal(4, testArray.length)
    })

    it('配列の末尾に要素を追加 - push', () => {
        const testArray = ['a', 'b', 'c', 'd']
        testArray.push('e')
        assert.deepEqual(['a', 'b', 'c', 'd', 'e'], testArray)
    })

    it('配列の末尾の要素を削除する - pop', () => {
        const testArray = ['a', 'b', 'c', 'd']
        const val = testArray.pop()
        if (typeof val === 'string') {
            assert.equal('d', val)
        }
        assert.deepEqual(['a', 'b', 'c'], testArray)
    })

    it('配列の先頭に要素を追加 - unshift', () => {
        const testArray = ['a', 'b', 'c', 'd']
        testArray.unshift('Z')
        assert.deepEqual(['Z', 'a', 'b', 'c', 'd'], testArray)
    })

    it('配列の先頭の要素を削除する - shift', () => {
        const testArray = ['a', 'b', 'c', 'd']
        const val = testArray.shift()
        if (typeof val === 'string') {
            assert.equal('a', val)
        }
        assert.deepEqual(['b', 'c', 'd'], testArray)
    })
})
