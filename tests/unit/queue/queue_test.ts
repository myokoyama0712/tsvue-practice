import { assert } from 'chai'
import { Queue } from '@/modules/queue/queue'

describe('Queue', () => {
    it('Queueの基本操作', () => {
        const q = new Queue()
        q.enqueue(100)
        assert.equal(1, q.getSize())
        assert.equal(100, q.dequeue())
        assert.equal(0, q.getSize())
    })

    it('異なるデータ型を格納するQueue', () => {
        const q = new Queue()
        q.enqueue(1.0)
        q.enqueue('string')
        q.enqueue(false)
        assert.equal(1.0, q.dequeue())
        assert.equal('string', q.dequeue())
        assert.equal(false, q.dequeue())
    })
})
