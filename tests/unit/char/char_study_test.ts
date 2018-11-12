import { assert } from 'chai'
import { toggleString } from '@/modules/char/char'

describe('文字の処理の学習', () => {
    it('ascii文字列を1文字ずつ取得', () => {
        const s = 'abcdefg'

        assert.equal(7, s.length)

        const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        for (let i = 0; i < s.length; i++) {
            assert.equal(array[i], s.charAt(i))
        }
    })

    it('文字列を1文字ずつ取得', () => {
        const s = 'あア亜'

        assert.equal(3, s.length)

        const array = ['あ', 'ア', '亜']
        for (let i = 0; i < s.length; i++) {
            assert.equal(array[i], s.charAt(i))
        }
    })

    it('文字列中のアルファベットのみを大文字もしくは小文字に変換', () => {
        const lower = 'abcdefghijklmnopqrstuvwxyz1(あ漢'
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1(あ漢'
        assert.equal(upper, lower.toUpperCase())
        assert.equal(lower, upper.toLowerCase())
    })

    it('文字列中のアルファベットを反転', () => {
        const s = 'AbCdEfGhIjKlMnOpQrStUvWxYz(){}+-*/あ漢'
        assert.equal('aBcDeFgHiJkLmNoPqRsTuVwXyZ(){}+-*/あ漢', toggleString(s))
    })
})
