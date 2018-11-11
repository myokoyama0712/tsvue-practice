import { assert } from 'chai'
import { BoundedRandomInt, BoundedRandomFloat } from '@/modules/random/random'

describe('乱数', () => {
    it('範囲を指定した整数の乱数生成', () => {
        const max = 6
        const min = 1

        let ok = true
        let observedMax = -1
        let observedMin = 1000000
        for (let i = 0; i < 1000000; i++) {
            const bri = BoundedRandomInt(min, max)
            // 範囲チェック
            if (!(min <= bri && bri <= max)) {
                ok = false
            }
            // 最大値・最小値更新
            observedMax = Math.max(observedMax, bri)
            observedMin = Math.min(observedMin, bri)
        }
        assert.isTrue(ok)
        assert.equal(max, observedMax)
        assert.equal(min, observedMin)
    })

    it('範囲を指定した浮動小数点数の乱数生成', () => {
        const max = 100.0
        const min = 10.0
        const requiredError = 0.01

        let ok = true
        let observedMax = -1.0
        let observedMin = 1000000.0
        for (let i = 0; i < 1000000; i++) {
            const bfr = BoundedRandomFloat(min, max)
            // 範囲チェック
            if (!(min <= bfr && bfr <= max)) {
                ok = false
            }
            // 最大値・最小値更新
            observedMax = Math.max(observedMax, bfr)
            observedMin = Math.min(observedMin, bfr)
        }
        assert.isTrue(ok)
        const maxError = Math.abs(max - observedMax)
        const minError = Math.abs(min - observedMin)
        assert.isTrue(maxError < requiredError)
        assert.isTrue(minError < requiredError)
    })
})
