export class ShortestPath {
    private cost: number
    private path: number[]

    constructor() {
        this.cost = 1000000
        this.path = []
    }

    public SetPath(path: number[]) {
        this.path = path
    }

    public GetPath(): number[] {
        return this.path
    }

    public AppendNodeToPath(...nodes: number[]) {
        this.path.push(...nodes)
    }

    public SetCost(cost: number) {
        this.cost = cost
    }

    public GetCost(): number {
        return this.cost
    }
}
