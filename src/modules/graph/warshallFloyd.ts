import { Graph } from '@/modules/graph/graph'
import { ShortestPath } from '@/modules/graph/shortestPath'

export class WarshallFloyd {
    private g: Graph
    private matrix: ShortestPath[][]

    constructor(g: Graph) {
        this.g = g
        this.matrix = []

        for (let i = 0; i < g.GetNodeNum(); i++) {
            const row: ShortestPath[] = []
            for (let j = 0; j < g.GetNodeNum(); j++) {
                if (j === i) {
                    const sp = new ShortestPath()
                    sp.SetPath([i])
                    row.push(sp)
                    continue
                }

                const s = new ShortestPath()
                s.SetPath([i])
                const weight = g.GetEdgeWeight(i, j)
                if (weight >= 0) {
                    s.SetCost(weight)
                    s.AppendNodeToPath(...[j])
                }
                row.push(s)
            }
            this.matrix.push(row)
        }
    }

    public GetShortestPath(startNodeId: number, goalNodeId: number): ShortestPath {
        if (startNodeId < 0 || this.g.GetNodeNum() <= startNodeId ||
            goalNodeId < 0 || this.g.GetNodeNum() <= goalNodeId) {
            throw new Error('out of range error')
        } else if (startNodeId === goalNodeId) {
            throw new Error('same argument error')
        }

        for (let k = 0; k < this.g.GetNodeNum(); k++) {
            for (let i = 0; i < this.g.GetNodeNum(); i++) {
                for (let j = 0; j < this.g.GetNodeNum(); j++) {
                    const newCost = this.matrix[i][k].GetCost() + this.matrix[k][j].GetCost()
                    if (this.matrix[i][j].GetCost() > newCost) {
                        this.matrix[i][j].SetCost(newCost)
                        const first = this.matrix[i][k].GetPath()
                        const last = this.matrix[k][j].GetPath()
                        const copiedFirst = first.slice(0, first.length)
                        const copiedLast = last.slice(0, last.length)
                        const tmp = copiedLast.slice(1, copiedLast.length)
                        copiedFirst.push(...tmp)
                        this.matrix[i][j].SetPath(copiedFirst)
                    }
                }
            }
        }

        return this.matrix[startNodeId][goalNodeId]
    }
}
