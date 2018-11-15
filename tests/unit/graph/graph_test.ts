import { assert } from 'chai'
import { Graph } from '@/modules/graph/graph'

describe('グラフ構造体のテスト', () => {
    const graph = new Graph(6)
    graph.SetEdgeWeight(0, 1, 7)
    graph.SetEdgeWeight(0, 2, 9)
    graph.SetEdgeWeight(0, 5, 14)
    graph.SetEdgeWeight(1, 2, 10)
    graph.SetEdgeWeight(1, 3, 15)
    graph.SetEdgeWeight(2, 3, 11)
    graph.SetEdgeWeight(2, 5, 2)
    graph.SetEdgeWeight(3, 4, 6)
    graph.SetEdgeWeight(4, 5, 9)

    it('例グラフのテスト', () => {
        assert.equal(7, graph.GetEdgeWeight(1, 0))
        assert.equal(9, graph.GetEdgeWeight(2, 0))
        assert.equal(14, graph.GetEdgeWeight(5, 0))
        assert.equal(15, graph.GetEdgeWeight(3, 1))
        assert.equal(10, graph.GetEdgeWeight(2, 1))
        assert.equal(11, graph.GetEdgeWeight(3, 2))
        assert.equal(2, graph.GetEdgeWeight(5, 2))
        assert.equal(6, graph.GetEdgeWeight(4, 3))
        assert.equal(9, graph.GetEdgeWeight(5, 4))
    })
})
