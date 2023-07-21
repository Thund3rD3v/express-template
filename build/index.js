"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const main_1 = __importDefault(require("./routes/main"));
const listen_1 = __importDefault(require("./utils/listen"));
const console_1 = __importDefault(require("./utils/console"));
const last_checkpoint_1 = __importDefault(require("./routes/last_checkpoint"));
const app = (0, express_1.default)();
console_1.default.info(`Instance Mode Is ${process.env.PRODUCTION === "true" ? `Production` : `Development`}`);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/", main_1.default);
app.use(last_checkpoint_1.default);
app.listen(process.env.PORT, listen_1.default);
//# sourceMappingURL=index.js.map