import fs from "fs";

export interface FileDBOptions {
  Filename: string;
}

class FileDB {
  data: {};
  options: FileDBOptions;

  constructor(options: FileDBOptions) {
    this.options = options;
    if (fs.existsSync(options.Filename) === true) {
      try {
        this.data = JSON.parse(fs.readFileSync(options.Filename, "utf-8"));
      } catch {
        this.data = {};
      }
    } else {
      fs.appendFileSync(options.Filename, JSON.stringify({}), "utf-8");
    }
  }

  saveSync() {
    fs.writeFileSync(this.options.Filename, JSON.stringify(this.data), "utf-8");
  }

  getSync(key: string) {
    return this.data[key];
  }

  setSync(key: string, value: any) {
    try {
      this.data[key] = value;
      this.saveSync();
    } catch {
      return false;
    }
  }

  remove(key: string) {
    try {
      delete this.data[key];
      this.saveSync();
    } catch {
      return false;
    }
  }
}

export default FileDB;
