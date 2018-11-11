import { assert } from 'chai'

describe('bit操作の学習', () => {
    it('Nbitの2進数の全列挙', () => {
        const expect = ['0', '1', '10', '11', '100', '101', '110', '111']
        // 2の3乗通りの全列挙のforループ
        const actual: string[] = []
        for (let i = 0; i < (1 << 3); i++) {
            actual.push(i.toString(2))
        }
        assert.deepEqual(expect, actual)
    })

    it('2進数を1ビットずつ取得 - bit積', () => {
        const num = 100
        const expect = [1, 1, 0, 0, 1, 0, 0]
        const actual: number[] = []
        for (let i = 0; i < 7; i++) {
            const bit = (num >> i) & 1
            actual.unshift(bit)
        }
        assert.deepEqual(expect, actual)
    })

    it('2進数をビット単位で編集 - bit和', () => {
        const expect = [1, 0, 1, 0, 1, 0, 1, 0]
        let bits = 0
        bits |= (1 << 1)
        bits |= (1 << 3)
        bits |= (1 << 5)
        bits |= (1 << 7)
        const actual: number[] = []
        for (let i = 0; i < 8; i++) {
            const b = 1 & (bits >> i)
            actual.unshift(b)
        }
        assert.deepEqual(expect, actual)
    })
})
