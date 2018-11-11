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

    it('複数要素および配列の一括push/unshift', () => {
        let testArray = [0]
        const added = [1, 2]
        // スプレッド演算子
        testArray.push(...added)
        assert.deepEqual([0, 1, 2], testArray)
        testArray = [0]
        testArray.unshift(...added)
        assert.deepEqual([1, 2, 0], testArray)  // ここは直感的じゃないかもしれない
        // 可変長引数
        testArray = [0]
        testArray.push(1, 2)
        assert.deepEqual([0, 1, 2], testArray)
        testArray = [0]
        testArray.unshift(1, 2)
        assert.deepEqual([1, 2, 0], testArray)  // ここは直感的じゃないかもしれない
    })

    it('配列のshallow copy', () => {
        const testArray = ['a', 'b', 'c']
        const actual = testArray.slice()
        assert.deepEqual(testArray, actual)
    })
})
