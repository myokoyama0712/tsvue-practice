export class Queue {
    // プロパティ
    private data: any[]
    private size: number

    // コンストラクタ
    constructor() {
        this.data = []
        this.size = 0
    }

    // メソッド
    public enqueue(obj: any) {
        this.data.push(obj)
        this.size++
    }
    public dequeue(): any {
        const obj = this.data.shift()
        this.size--
        return obj
    }
    public getSize(): number {
        return this.size
    }
}
