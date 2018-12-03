import { assert } from 'chai'
import { toggleString } from '@/modules/char/char'

/**
 * @param {string} name - 名前
 * @param {number} age - 年齢
 */
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

describe('ES6のクラスに関する学習テスト', () => {
  it('インスタンス生成と属性の追加', () => {
    const alice = new Person('Alice', 24)
    assert.equal('Alice', alice.name)
    assert.equal(24, alice.age)
    alice.gender = 'female'
    assert.equal('female', alice.gender)
  })
})
