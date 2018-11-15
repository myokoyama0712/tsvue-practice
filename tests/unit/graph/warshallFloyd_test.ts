import { assert } from 'chai'
import { Graph } from '@/modules/graph/graph'
import { WarshallFloyd } from '@/modules/graph/warshallFloyd'
import { ShortestPath } from '@/modules/graph/shortestPath'

describe('ワーシャルフロイド法', () => {
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

    it('最短路', () => {
        const wf = new WarshallFloyd(graph)
        let s = new ShortestPath()
        s.SetPath([0, 2, 5, 4])
        s.SetCost(20)
        assert.deepEqual(s, wf.GetShortestPath(0, 4))
        s = new ShortestPath()
        s.SetPath([5, 2, 1])
        s.SetCost(12)
        assert.deepEqual(s, wf.GetShortestPath(5, 1))
    })
})
