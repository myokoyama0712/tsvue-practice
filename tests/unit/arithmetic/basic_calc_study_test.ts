import { assert } from 'chai'

describe('基本的な算術計算', () => {
    it('最大値最小値を取得する', () => {
        // 可変長引数
        assert.equal(10, Math.max(1, -1, 10))
        assert.equal(-1, Math.min(1, -1, 10))
        // 配列
        const numbers: number[] = [1, -1, 10]
        assert.equal(10, Math.max(...numbers))
        assert.equal(-1, Math.min(...numbers))
    })

    it('天井関数と床関数', () => {
        // 天井関数
        assert.equal(100.0, Math.ceil(99.01))
        assert.equal(99.0, Math.ceil(99.00))
        assert.equal(-1.0, Math.ceil(-1.5))
        assert.equal(-1.0, Math.ceil(-1.0))
        // 床関数
        assert.equal(99.0, Math.floor(99.99))
        assert.equal(99.0, Math.floor(99.00))
        assert.equal(-1.0, Math.floor(-0.99))
        assert.equal(-1.0, Math.floor(-1.0))
    })

    it('絶対値', () => {
        // 浮動小数点
        assert.equal(1.0, Math.abs(1.0))
        assert.equal(1.0, Math.abs(-1.0))
        // 整数
        assert.equal(1, Math.abs(1))
        assert.equal(1, Math.abs(-1))
    })

    it('べき乗', () => {
        // 浮動小数点数
        assert.equal(8.0, Math.pow(2.0, 3.0))
        // 整数
        assert.equal(8, Math.pow(2, 3))
    })
})
