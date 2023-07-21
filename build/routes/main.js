"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start = new Date().getTime();
function main(_, res) {
    res.success({
        Data: {
            Version: "v1.0.0",
            Production: process.env.PRODUCTION === "true",
            Uptime: new Date().getTime() - start,
        },
    });
}
exports.default = main;
//# sourceMappingURL=main.js.map