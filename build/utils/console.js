"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const safe_1 = __importDefault(require("colors/safe"));
class Console {
    constructor() { }
    log(args) {
        console.log(args);
    }
    error(args) {
        console.error(safe_1.default.red(`[ERROR] ` + args));
    }
    success(args) {
        console.log(safe_1.default.green(`[SUCCESS] ` + args));
    }
    warn(args) {
        console.log(safe_1.default.yellow(`[WARN] ` + args));
    }
    info(args) {
        console.log(safe_1.default.cyan(`[INFO] ` + args));
    }
}
exports.default = new Console();
//# sourceMappingURL=console.js.map