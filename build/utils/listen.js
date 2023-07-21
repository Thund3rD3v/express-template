"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("./console"));
function default_1() {
    console_1.default.success(`Server Started at http://127.0.0.1:${process.env.PORT}`);
}
exports.default = default_1;
//# sourceMappingURL=listen.js.map