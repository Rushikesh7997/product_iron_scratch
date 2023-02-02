const ArgumentType = require("../../extension-support/argument-type");
const BlockType = require("../../extension-support/block-type");
const Cast = require("../../util/cast");
const log = require("../../util/log");

class Scratch3NewBlocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "Square",
            name: "Square",
            blocks: [
                {
                    opcode: "writeLog",
                    blockType: BlockType.COMMAND,
                    text: "log [TEXT]",
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello",
                            menu: "languages",
                        },
                    },
                },
            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: [
                        { text: "test", value: "test" },
                        { text: "hello", value: "hello" },
                    ],
                },
            },
        };
    }

    writeLog(args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
}

module.exports = Scratch3NewBlocks;
