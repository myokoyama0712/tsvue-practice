export class Graph {
    private adjMatrix: number[][]

    constructor(nodeNum: number) {
        this.adjMatrix = []
        for (let i = 0; i < nodeNum; i++) {
            const row = []
            for (let j = 0; j < nodeNum; j++) {
                row.push(-1)
            }
            this.adjMatrix.push(row)
        }
    }

    public GetNodeNum(): number {
        return this.adjMatrix.length
    }

    public GetEdgeWeight(i: number, j: number): number {
        if (i < 0 || this.adjMatrix.length <= i || j < 0 || this.adjMatrix.length <= j) {
            throw new Error('out of range error')
        }
        if (i === j) {
            throw new Error('same argument error')
        }
        return this.adjMatrix[i][j]
    }

    public SetEdgeWeight(i: number, j: number, weight: number) {
        if (i < 0 || this.adjMatrix.length <= i || j < 0 || this.adjMatrix.length <= j) {
            throw new Error('out of range error')
        }
        if (i === j) {
            throw new Error('same argument error')
        }
        this.adjMatrix[i][j] = weight
        this.adjMatrix[j][i] = weight
    }

    public GetEdgeNum(): number {
        let edgeNum = 0
        for (let i = 0; i < this.adjMatrix.length; i++) {
            for (let j = i + 1; j < this.adjMatrix.length; j++) {
                const weight = this.GetEdgeWeight(i, j)
                if (weight >= 0) {
                    edgeNum++
                }
            }
        }
        return edgeNum
    }
}
