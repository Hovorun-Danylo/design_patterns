export class Console {
    static printBlock(predicate, content) {
        console.log(`${predicate}${this.blockIndent}${[...content].join(this.blockIndent)}`);
        console.log(this.blockSeparator);
    }
}
Console.blockSeparator = "-".repeat(50);
Console.blockIndent = "\n    ";
//# sourceMappingURL=Console.js.map