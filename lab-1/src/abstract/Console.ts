
export abstract class Console {
    static blockSeparator = "-".repeat(50)
    static blockIndent = "\n    "

    private constructor() { }

    static printBlock(predicate: string, content: Iterable<any>) {
        console.log(`${predicate}${this.blockIndent}${[...content].join(this.blockIndent)}`)
        console.log(this.blockSeparator)
    }
}
