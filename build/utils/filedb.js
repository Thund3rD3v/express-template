"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FileDB {
    constructor(options) {
        this.options = options;
        if (fs_1.default.existsSync(options.Filename) === true) {
            try {
                this.data = JSON.parse(fs_1.default.readFileSync(options.Filename, "utf-8"));
            }
            catch (_a) {
                this.data = {};
            }
        }
        else {
            fs_1.default.appendFileSync(options.Filename, JSON.stringify({}), "utf-8");
        }
    }
    saveSync() {
        fs_1.default.writeFileSync(this.options.Filename, JSON.stringify(this.data), "utf-8");
    }
    getSync(key) {
        return this.data[key];
    }
    setSync(key, value) {
        try {
            this.data[key] = value;
            this.saveSync();
        }
        catch (_a) {
            return false;
        }
    }
    remove(key) {
        try {
            delete this.data[key];
            this.saveSync();
        }
        catch (_a) {
            return false;
        }
    }
}
exports.default = FileDB;
//# sourceMappingURL=filedb.js.map