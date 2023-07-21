import colors from "colors/safe";

class Console {
  constructor() {}

  // Log color-less text to the console.
  log(args: any) {
    console.log(args);
  }

  // Log red colored text to the console. Represents an error.
  error(args: any) {
    console.error(colors.red(`[ERROR] ` + args));
  }

  // Log green colored text to the console. Represents a success.
  success(args: any) {
    console.log(colors.green(`[SUCCESS] ` + args));
  }

  // Log yellow colored text to the console. Represents a warning.
  warn(args: any) {
    console.log(colors.yellow(`[WARN] ` + args));
  }

  // Log blue colored text to the console. Represents a info.
  info(args: any) {
    console.log(colors.cyan(`[INFO] ` + args));
  }
}

export default new Console();
